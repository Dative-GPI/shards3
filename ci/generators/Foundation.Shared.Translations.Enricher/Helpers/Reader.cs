using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Foundation.Shared.Translations.Enricher
{
    public class Reader
    {
        private string[] _include;
        private string[] _exclude;
        private string[] _lookFor;
        private string _srcPath;

        public Reader(IConfiguration configuration)
        {
            _include = configuration.GetSection("APP:INCLUDE").Get<string[]>();
            _exclude = configuration.GetSection("APP:EXCLUDE").Get<string[]>();
            _lookFor = configuration.GetSection("APP:LOOKFOR").Get<string[]>();

            var repo = configuration.GetSection("REPOSITORY");
            var rootPath = repo.GetValue<string>("PATH");
            var sourceFolder = repo.GetValue<string>("SOURCEFOLDER");

            _srcPath = Path.Combine(rootPath, sourceFolder);
        }

        public Task<Project> Read()
        {
            var files = Directory.GetFiles(_srcPath, "*", SearchOption.AllDirectories)
                .Where(f => _include.Any(p => f.Contains(p)))
                .Where(f => !_exclude.Any(p => f.Contains(p)))
                .Select(f => new ProjectFile()
                {
                    RelativePath = f,
                    Content = File.ReadAllText(f)
                })
                .ToList();

            var matchedFiles = files
                .Where(f => _lookFor.Any(p => f.Content.Contains(p)))
                .ToList();

            var project = new Project
            {
                Files = files,
                MatchedFiles = matchedFiles
            };

            return Task.FromResult(project);
        }
    }
}