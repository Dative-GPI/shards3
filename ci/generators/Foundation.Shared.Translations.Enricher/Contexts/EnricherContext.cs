using Microsoft.EntityFrameworkCore;

using Foundation.Shared.Translations.Enricher.DTOs;

namespace Foundation.Shared.Translations.Enricher
{
    public class EnricherContext : DbContext
    {
        public DbSet<TranslationOccurenceDTO> TranslationOccurences { get; set; }
        public DbSet<FileDTO> Files { get; set; }

        public EnricherContext(DbContextOptions<EnricherContext> options) : base(options)
        {
            
        }
    }
}