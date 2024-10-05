using System.ClientModel;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Azure.AI.OpenAI;
using LibGit2Sharp;

namespace Foundation.Shared.Translations.Corrector
{
    public static class DepedencyInjector
    {
        public static IServiceCollection AddCorrector(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<Engine>();

            services.AddScoped<Analyzer>();
            services.AddScoped<Cleaner>();
            services.AddScoped<Reader>();

            services.AddDbContext<CorrectorContext>(options =>
            {
                options.UseSqlite(configuration.GetConnectionString("SQLITE"));
            });

            services.AddScoped(sp =>
            {
                var client = new AzureOpenAIClient(
                    new System.Uri(configuration.GetValue<string>("OPENAI:URI")),
                    new ApiKeyCredential(configuration.GetValue<string>("OPENAI:APIKEY"))
                );
                return client;
            });

            services.AddScoped(sp => {
                var client = sp.GetRequiredService<AzureOpenAIClient>();
                return client.GetChatClient(configuration.GetValue<string>("OPENAI:CHAT"));
            });

            services.AddScoped(sp =>
            {
                var repo = new Repository(configuration.GetValue<string>("REPOSITORY:PATH"));
                return repo;
            });

            return services;
        }
    }
}