using System.Collections.Generic;

namespace Foundation.Shared.Translations.Enricher
{
    public class Project
    {
        public List<ProjectFile> Files { get; set; }
        public List<ProjectFile> MatchedFiles { get; set; }
    }
}