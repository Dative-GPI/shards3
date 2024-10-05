using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Reflection;
using System.Collections.Generic;

namespace Foundation.Shared.Translations
{
    public static class TranslationsHelper
    {
        const string TRANSLATIONS_DIRECTORY = "Translations";
        const string TRANSLATIONS_FILE = "translations.json";
        const string META_TRANSLATIONS_FILE = "meta-translations.json";

        public static IEnumerable<Translation> GetTranslations()
        {
            var translationFile = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), TRANSLATIONS_DIRECTORY, TRANSLATIONS_FILE);
            if (File.Exists(translationFile))
            {
                var content = File.ReadAllText(translationFile);
                var translations = JsonSerializer.Deserialize<IEnumerable<Translation>>(content);
                return translations;
            }
            Console.Error.WriteLine("Translations file not found.");
            return Enumerable.Empty<Translation>();
        }

        public static IEnumerable<MetaTranslation> GetMetaTranslations()
        {
            var translationFile = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), TRANSLATIONS_DIRECTORY, META_TRANSLATIONS_FILE);
            if (File.Exists(translationFile))
            {
                var content = File.ReadAllText(translationFile);
                var translations = JsonSerializer.Deserialize<IEnumerable<MetaTranslation>>(content);
                return translations;
            }
            Console.Error.WriteLine("Meta translations file not found.");
            return Enumerable.Empty<MetaTranslation>();
        }
    }
}