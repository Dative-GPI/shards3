using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Foundation.Shared.Translations.Enricher.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Foundation.Shared.Translations.Enricher
{
    public class Reporter
    {
        private EnricherContext _context;

        public Reporter(EnricherContext context)
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