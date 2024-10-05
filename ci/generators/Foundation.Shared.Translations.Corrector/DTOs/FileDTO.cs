using System;

namespace Foundation.Shared.Translations.Corrector.DTOs
{
    public class FileDTO
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
        public DateTime LastSeen { get; set; }
    }
}