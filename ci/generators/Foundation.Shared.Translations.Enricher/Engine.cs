using System;
using System.Threading.Tasks;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Foundation.Shared.Translations.Enricher
{
    public class Engine
    {
        private ILogger<Engine> _logger;
        private IServiceProvider _serviceProvider;

        public Engine(
            ILogger<Engine> logger,
            IServiceProvider serviceProvider
        )
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        public async Task Run()
        {
            await Init();

            using var rootScope = _serviceProvider.CreateScope();

            var reader = rootScope.ServiceProvider.GetRequiredService<Reader>();
            var cleaner = rootScope.ServiceProvider.GetRequiredService<Cleaner>();
            var reporter = rootScope.ServiceProvider.GetRequiredService<Reporter>();

            _logger.LogInformation("Reading project files");

            var project = await reader.Read();

            _logger.LogInformation("Found {files} matching ! Analyzing ....", project.MatchedFiles.Count);

            foreach (var file in project.MatchedFiles)
            {
                using var scope = _serviceProvider.CreateScope();

                var analyzer = scope.ServiceProvider.GetRequiredService<Analyzer>();

                await analyzer.Analyze(file);
            }

            await cleaner.Clean(project);

            await reporter.Report();
        }

        private async Task Init()
        {
            using var rootScope = _serviceProvider.CreateScope();

            var context = rootScope.ServiceProvider.GetRequiredService<EnricherContext>();

            _logger.LogInformation("Ensuring database is created");

            await context.Database.EnsureCreatedAsync();
        }
    }
}