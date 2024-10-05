using System;
using System.Collections.Generic;

using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using OpenAI.Chat;
using LibGit2Sharp;

using Foundation.Shared.Translations.Corrector.DTOs;
using Foundation.Shared.Translations.Corrector.Messages;

namespace Foundation.Shared.Translations.Corrector
{
    public class Analyzer
    {
        const string SystemPrompt = """
            You are an AI assistant capable of analyzing Vue.js and typescript code that contains translation functions ($tr). 
            Your task is to extract information from the translation functions and return a JSON object for each $tr call with the following details:

            1. The translation code (first argument of $tr have to start with "ui", if not, do not consider it)
            2. The default translation (second argument of $tr)
            3. A description or context for each translation which includes the component type (input, dialog, list, info-cards, ...) and the situation the translation appears in
            4. A suggestion for a better and more precise default translation, only if the current one is not ideal

            Expected output format:

            { 
                translations: [
                    {
                        "code": "translation-code",
                        "default": "Default translation text",
                        "context": "Description or context of the translation",
                        "suggestion": "Better translation suggestion if current one is not ideal"
                    },
                    ...
                ]
            }
        """;
        private ILogger<Analyzer> _logger;
        private ChatClient _chatClient;
        private CorrectorContext _context;
        private Repository _repository;

        public Analyzer(ILogger<Analyzer> logger,
            ChatClient chatClient,
            CorrectorContext context,
            Repository repository)
        {
            _logger = logger;
            _chatClient = chatClient;
            _context = context;
            _repository = repository;
        }


        public async Task Analyze(ProjectFile file)
        {
            var treatedFile = await _context.Files.SingleOrDefaultAsync(f => f.Path == file.ProjectPath);
            var lastModified = _repository.Commits.QueryBy(file.ProjectPath).FirstOrDefault()?.Commit.Committer.When;

            if (treatedFile != null && lastModified.HasValue && lastModified.Value <= treatedFile.LastSeen)
            {
                _logger.LogInformation("File {0} has not been modified since last analysis", file);
                return;
            }
            else
            {
                _logger.LogInformation("Analyzing file {0}", file);
            }

            var response = await _chatClient.CompleteChatAsync(
                new List<ChatMessage>() {
                    // System messages represent instructions or other guidance about how the assistant should behave
                    new SystemChatMessage(SystemPrompt),
                    // User messages represent user input, whether historical or the most recent input
                    new UserChatMessage(@$"
                        fileName : {file.Name},
                        content :
                        {file.Content}
                    "),
                },
                new ChatCompletionOptions()
                {
                    ResponseFormat = ChatResponseFormat.CreateJsonObjectFormat(),
                }
            );

            if (treatedFile == null)
            {
                _context.Files.Add(new FileDTO
                {
                    Id = Guid.NewGuid(),
                    Path = file.ProjectPath,
                    LastSeen = DateTime.Now
                });
            }
            else
            {
                treatedFile.LastSeen = DateTime.Now;
                _context.Files.Update(treatedFile);
            }

            var previousOccurences = await _context.TranslationOccurences.Where(t => t.File == file.ProjectPath).ToListAsync();
            _context.TranslationOccurences.RemoveRange(previousOccurences);

            var totalOccurences = 0;

            foreach (var message in response.Value.Content)
            {
                var occurences = JsonSerializer.Deserialize<FileTranslations>(message.Text, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (!occurences.IsValid)
                {
                    _logger.LogWarning("Invalid response for file {file} : \n{response}", file, message.Text);
                    continue;
                }

                _context.TranslationOccurences.AddRange(occurences.Translations.Select(t => new TranslationOccurenceDTO
                {
                    Id = Guid.NewGuid(),
                    TranslationCode = t.Code,
                    File = file.ProjectPath,
                    DefaultValue = t.Default,
                    Suggestion = t.Suggestion,
                    Context = t.Context
                }));

                totalOccurences += occurences.Translations.Count;
            }

            _logger.LogInformation("Found {0} translations", totalOccurences);

            await _context.SaveChangesAsync();
        }
    }
}