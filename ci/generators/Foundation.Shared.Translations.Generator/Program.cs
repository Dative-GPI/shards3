using System.Threading.Tasks;

namespace Foundation.Shared.Translations.Generator
{
    internal partial class Program
    {
        private static void Main(string[] args)
        {
            BaseGenerator.Generate();

            TranslationsGenerator.Generate();

            MetaTranslationsGenerator.Generate();
        }
    }
}