using System.IO;
using System.Threading.Tasks;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Serilog;

namespace Foundation.Shared.Translations.Enricher
{
    public static class Program
    {
        public static async Task Main(string[] args)
        {
            var host = new Microsoft.Extensions.Hosting.HostBuilder()
                .ConfigureHostConfiguration(configHost =>
                {
                    configHost.SetBasePath(Directory.GetCurrentDirectory());
                    configHost.AddJsonFile("appsettings.json", optional: true);
                    configHost.AddEnvironmentVariables();
                    configHost.AddCommandLine(args);
                })
                .ConfigureServices((hostContext, services) =>
                {
                    services.AddLogging(opt => opt.AddSerilog(
                            new LoggerConfiguration()
                                .ReadFrom.Configuration(hostContext.Configuration)
                                .CreateLogger()
                        )
                    );

                    services.AddEnricher(hostContext.Configuration);
                })
                .Build();
            
            var engine = host.Services.GetRequiredService<Engine>();

            await engine.Run();
        }
    }
}