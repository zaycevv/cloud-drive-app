import { Extension } from "./getColorByExtension";

export const getExtensionFromFileName = (filename: string): string => {
  return String(filename.split(".").pop() as Extension);
};
