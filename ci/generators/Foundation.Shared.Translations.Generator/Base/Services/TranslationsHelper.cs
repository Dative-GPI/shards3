using System;
using System.IO;
using System.Collections.Generic;
using System.Text.Json;
using System.Reflection;
namespace Foundation.Shared.Translations
{
  public static class TranslationsHelper
  {
    const string TRANSLATIONS_DIRECTORY = "Translations";
    const string TRANSLATIONS_FILE = "translations.json";

    public static IEnumerable<Translation> GetTranslations()
    {
      var translationFile = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), TRANSLATIONS_DIRECTORY, TRANSLATIONS_FILE);
      if (File.Exists(translationFile))
      {
        var content = File.ReadAllText(translationFile);
        var translations = JsonSerializer.Deserialize<IEnumerable<Translation>>(content);
        return translations;
      }
      Console.WriteLine("Translations file not found.");
      return null;
    }
  }
}