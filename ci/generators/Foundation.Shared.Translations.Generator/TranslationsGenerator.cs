using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using System.Xml.Serialization;
using System.Text.RegularExpressions;
using System.Text.Json;

using static Foundation.Shared.Translations.Generator.Consts;

namespace Foundation.Shared.Translations.Generator
{

    public static class TranslationsGenerator
    {
        const string SRC_PATH = "../../../src";
        static string[] FILES_PATTERN = new[] { ".vue", ".ts" };
        const string REGEX_PATTERN = @"\$tr\(\s*['""]([\w\.-]*)['""],\s*(?:[']([^']*)[']|[""]([^""]*)[""])\s*(?:,\s*[^)]+)?\s*\)";
        static readonly Regex Regex = new(REGEX_PATTERN);

        public static void Generate()
        {
            var translations = new Dictionary<string, string>();

            var files = Directory.GetFiles(SRC_PATH, "*", SearchOption.AllDirectories)
                            .Where(f => FILES_PATTERN.Any(p => f.EndsWith(p)));

            foreach (var file in files)
            {
                var content = File.ReadAllText(file);
                var matches = Regex.Matches(content);

                foreach (Match match in matches)
                {
                    var translationKey = match.Groups[1].Value;
                    var translationValue = match.Groups[2].Value + match.Groups[3].Value; // Group2 = xxx in 'xxx', Group3 = xxx in "xxx"

                    translations.TryAdd(translationKey, translationValue);
                }

            }

            var result = translations.Select(t => new Translation { Code = t.Key, Value = t.Value }).ToList();
            var directoryPath = Path.Combine(OUTPUT_PROJECT_PATH, TRANSLATIONS_DIRECTORY);
            Directory.CreateDirectory(directoryPath);
            var translationFileContent = JsonSerializer.Serialize(result);
            var filePath = Path.Combine(directoryPath, TRANSLATIONS_FILE);
            File.WriteAllText(filePath, translationFileContent);
            Console.WriteLine($"Translations file generated at {filePath} with {result.Count} translations");
        }
    }
}