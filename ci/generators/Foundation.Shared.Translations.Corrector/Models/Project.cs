using System.Collections.Generic;

namespace Foundation.Shared.Translations.Corrector
{
    public class Project
    {
        public List<ProjectFile> Files { get; set; }
        public List<ProjectFile> MatchedFiles { get; set; }
    }
}