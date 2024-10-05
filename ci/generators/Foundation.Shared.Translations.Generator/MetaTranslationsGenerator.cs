using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using System.Xml.Serialization;
using System.Text.RegularExpressions;
using System.Text.Json;

using static Foundation.Shared.Translations.Generator.Consts;
using Foundation.Shared.Translations.Corrector;
using Microsoft.EntityFrameworkCore;

namespace Foundation.Shared.Translations.Generator
{

    public static class MetaTranslationsGenerator
    {
        public static void Generate()
        {
            var context = new CorrectorContext(
                new DbContextOptionsBuilder<CorrectorContext>()
                    .UseSqlite("Data Source=../Foundation.Shared.Translations.Corrector/app.db")
                    .Options
            );

            var metaTranslations = context.TranslationOccurences
                .Where(t => t.TranslationCode.StartsWith("ui"))
                .GroupBy(t => t.TranslationCode)
                .Select(gt => new MetaTranslation()
                {
                    Code = gt.Key,
                    Occurences = gt.Select(t => new MetaTranslationOccurence()
                    {
                        DefaultValue = t.DefaultValue,
                        Suggestion = t.Suggestion,
                        Context = t.Context
                    }).ToList()
                })
                .ToList();

            var directoryPath = Path.Combine(OUTPUT_PROJECT_PATH, TRANSLATIONS_DIRECTORY);
            Directory.CreateDirectory(directoryPath);

            var translationFileContent = JsonSerializer.Serialize(metaTranslations);
            var filePath = Path.Combine(directoryPath, META_TRANSLATIONS_FILE);
            File.WriteAllText(filePath, translationFileContent);

            Console.WriteLine($"Translations file generated at {filePath} with {metaTranslations.Count} meta translations");
        }
    }
}