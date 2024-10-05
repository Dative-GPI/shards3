using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Foundation.Shared.Translations.Corrector.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Foundation.Shared.Translations.Corrector
{
    public class Reporter
    {
        private CorrectorContext _context;

        public Reporter(CorrectorContext context)
        {
            _context = context;
        }

        public async Task Report()
        {
            var occurences = await _context.TranslationOccurences
                .OrderBy(t => t.TranslationCode)
                .ToListAsync();

            var serializer = new XmlSerializer(typeof(List<TranslationOccurenceDTO>));

            using (var writer = new StringWriter())
            {
                serializer.Serialize(writer, occurences);
                string xmlOutput = writer.ToString();
                File.WriteAllText("report.xml", xmlOutput);
            }
        }
    }
}