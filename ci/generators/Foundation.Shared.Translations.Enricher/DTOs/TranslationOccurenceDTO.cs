using System;
using System.Xml.Serialization;

namespace Foundation.Shared.Translations.Enricher.DTOs
{
    public class TranslationOccurenceDTO
    {
        [XmlIgnore]
        public Guid Id { get; set; }

        [XmlAttribute("Code")]
        public string TranslationCode { get; set; }

        [XmlAttribute]
        public string File { get; set; }
        
        [XmlAttribute]
        public string DefaultValue { get; set; }

        [XmlAttribute]
        public string Suggestion { get; set; }

        [XmlAttribute]
        public string Context { get; set; }
    }
}