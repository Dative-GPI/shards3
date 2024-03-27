export const useFiles = () => {
    const read = (file: File, callback: Function): void => {
        const reader = new FileReader();
        reader.addEventListener("load", (fileEv) => {
          callback(fileEv.target && fileEv.target.result);
        });
        reader.readAsDataURL(file);
    };

    return {
        read
    };
}