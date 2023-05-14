import axios from "@/core/axios";
import { FileItem } from "@/api/dto/files.dto";

type FileType = "all" | "photos" | "trash";

export const getAll = async (type: FileType = "all"): Promise<FileItem[]> => {
  return (await axios.get("/files?type=" + type)).data;
};

export const remove = (ids: number[]): Promise<void> => {
  return axios.delete("/files?ids=" + ids);
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  try {
    const { data } = await axios.post("files", formData, config);

    return data;
  } catch (err) {
    throw err;
  }
};
