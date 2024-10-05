using System;

namespace Foundation.Shared.Translations.Corrector.DTOs
{
    public class TranslationOccurenceDTO
    {
        public Guid Id { get; set; }
        public string TranslationCode { get; set; }

        public string File { get; set; }
        
        public string DefaultValue { get; set; }
        public string Suggestion { get; set; }

        public string Context { get; set; }
    }
}