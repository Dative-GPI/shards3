import { FILE_URL } from "../config/urls";

import { useAppAuthToken } from "@dative-gpi/foundation-shared-services/composables";

export const useFiles = () => {
  const { authToken } = useAppAuthToken();

  const downloadFile = (id: string): void => {
    if (window.top != window.self) {
      window.open(document.referrer.slice(0, -1) + FILE_URL(id, authToken.value), "_blank");
    }
    else {
      window.open(FILE_URL(id, authToken.value), "_blank");
    }
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