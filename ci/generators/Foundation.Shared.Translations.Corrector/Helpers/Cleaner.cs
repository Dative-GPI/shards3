using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

namespace Foundation.Shared.Translations.Corrector
{
    public class Cleaner
    {
        private CorrectorContext _context;

        public Cleaner(CorrectorContext context)
        {
            _context = context;
        }

        public async Task Clean(Project project)
        {
            var files = await _context.Files.ToListAsync();

            foreach (var file in files)
            {
                if (!project.Files.Any(f => f.ProjectPath == file.Path))
                {
                    _context.Files.Remove(file);

                    var relatedTranslationOccurences = await _context.TranslationOccurences
                        .Where(o => o.File == file.Path)
                        .ToListAsync();

                    _context.TranslationOccurences.RemoveRange(relatedTranslationOccurences);
                }
            }

            await _context.SaveChangesAsync();
        }
    }
}