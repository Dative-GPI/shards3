using System;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibGit2Sharp;

namespace Foundation.Shared.Translations.Enricher
{
    public static class RepositoryExtensions
    {
        public static async Task<DateTime?> LatestCommitDate(this Repository repository, string path)
        {
            var result = await RunGitAsync($"log -1  --date=iso-strict --format=\"%ad\" -- \"{path}\"", repository.Info.WorkingDirectory).ConfigureAwait(false);

            if (!DateTime.TryParse(result, out var date))
            {
                Console.Error.WriteLine("Could not convert the Latest Commit Date to a DateTime for '{0}'. Raw Git Output was: '{1}'", path, result);
                return null;
            }

            return date;
        }

        public static async Task<string[]> ListFiles(string repositoryDirectory)
        {
            var result = await RunGitAsync($"ls-files", repositoryDirectory).ConfigureAwait(false);

            var files = result
                .Split(Environment.NewLine)
                .ToArray();

            return files;
        }

        public static async Task<string> RunGitAsync(string arguments, string workingDirectory)
        {
            var result = await RunProcessAsync("git", arguments, workingDirectory).ConfigureAwait(false);

            if (result.ExitCode != 0)
            {
                throw new Exception(result.Errors);
            }

            return result.Output;
        }

        private static async Task<(int ExitCode, string Output, string Errors)> RunProcessAsync(string application, string arguments, string workingDirectory)
        {
            using (var process = new Process())
            {
                process.StartInfo = new ProcessStartInfo
                {
                    CreateNoWindow = true,
                    UseShellExecute = false,
                    RedirectStandardError = true,
                    RedirectStandardOutput = true,
                    FileName = application,
                    Arguments = arguments,
                    WorkingDirectory = workingDirectory,
                };

                var outputBuilder = new StringBuilder();
                var errorsBuilder = new StringBuilder();

                process.OutputDataReceived += (_, args) => outputBuilder.AppendLine(args.Data);
                process.ErrorDataReceived += (_, args) => errorsBuilder.AppendLine(args.Data);

                process.Start();

                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                await process
                    .WaitForExitAsync()
                    .ConfigureAwait(false);

                var exitCode = process.ExitCode;
                var output = outputBuilder.ToString().Trim();
                var errors = errorsBuilder.ToString().Trim();

                return (exitCode, output, errors);
            }
        }
    }
}