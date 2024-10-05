using System.Collections.Generic;

namespace Foundation.Shared.Translations.Generator
{
    public class MetaTranslation
    {
        public string Code { get; set; }
        public List<MetaTranslationOccurence> Occurences { get; set; }
    }

    public class MetaTranslationOccurence
    {
        public string DefaultValue { get; set; }
        public string Suggestion { get; set; }
        public string Context { get; set; }
    }
}