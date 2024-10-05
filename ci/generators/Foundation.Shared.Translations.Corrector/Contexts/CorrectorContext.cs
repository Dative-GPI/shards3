using Microsoft.EntityFrameworkCore;

using Foundation.Shared.Translations.Corrector.DTOs;

namespace Foundation.Shared.Translations.Corrector
{
    public class CorrectorContext : DbContext
    {
        public DbSet<TranslationOccurenceDTO> TranslationOccurences { get; set; }
        public DbSet<FileDTO> Files { get; set; }

        public CorrectorContext(DbContextOptions<CorrectorContext> options) : base(options)
        {
            
        }
    }
}