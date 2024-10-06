namespace Foundation.Shared.Translations.Enricher
{
    public class ProjectFile
    {
        public string RelativePath { get; set; }
        public string ProjectPath => RelativePath.Replace("../", "").Replace("./", "");
        public string Content { get; set; }
        public string Name => System.IO.Path.GetFileName(ProjectPath);

        public override string ToString()
        {
            return ProjectPath;
        }
    }
}