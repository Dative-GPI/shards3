using System.Collections.Generic;

namespace Foundation.Shared.Translations.Corrector.Messages
{
    public class FileTranslations
    {
        public List<FileTranslation> Translations { get; set; }

        public bool IsValid => Translations != null && Translations.Count > 0 && Translations.TrueForAll(t => t.Code != null && t.Default != null);
    }

    public class FileTranslation
    {
        public string Code { get; set; }
        public string Default { get; set; }
        public string Context { get; set; }
        public string Suggestion { get; set; }
    }
}