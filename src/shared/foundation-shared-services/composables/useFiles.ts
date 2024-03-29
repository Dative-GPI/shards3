import { FILE_URL } from "../config/urls";

export const useFiles = () => {
  const downloadFile = (id: string): void => {
    window.open(FILE_URL(id), "_blank");
  };

  const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", (fileEv) => {
        resolve(fileEv.target && fileEv.target.result);
      });
      reader.addEventListener("error", (fileEv) => {
        reject(fileEv);
      });
      reader.readAsDataURL(file);
    });
  };

  return {
    downloadFile,
    readFile
  };
}