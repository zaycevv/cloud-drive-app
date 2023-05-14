import { Extension } from "./getColorByExtension";

export const getExtensionFromFileName = (filename: string) => {
  return filename.split(".").pop() as Extension;
};
