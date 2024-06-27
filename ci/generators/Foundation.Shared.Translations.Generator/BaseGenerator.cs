using System.IO;

using static Foundation.Shared.Translations.Generator.Consts;

namespace Foundation.Shared.Translations.Generator
{
  public static class BaseGenerator
  {
    public static void Generate()
    {
      CopyDirectory(BASE_PROJECT_PATH, OUTPUT_PROJECT_PATH, true);
    }

    private static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)
    {
      // Get information about the source directory
      var dir = new DirectoryInfo(sourceDir);

      // Check if the source directory exists
      if (!dir.Exists)
        throw new DirectoryNotFoundException($"Source directory not found: {dir.FullName}");

      // Cache directories before we start copying
      DirectoryInfo[] dirs = dir.GetDirectories();

      // Create the destination directory
      Directory.CreateDirectory(destinationDir);

      // Get the files in the source directory and copy to the destination directory
      foreach (FileInfo file in dir.GetFiles())
      {
        string targetFilePath = Path.Combine(destinationDir, file.Name);
        file.CopyTo(targetFilePath, true);
      }

      // If recursive and copying subdirectories, recursively call this method
      if (recursive)
      {
        foreach (DirectoryInfo subDir in dirs)
        {
          string newDestinationDir = Path.Combine(destinationDir, subDir.Name);
          CopyDirectory(subDir.FullName, newDestinationDir, true);
        }
      }
    }
  }
}