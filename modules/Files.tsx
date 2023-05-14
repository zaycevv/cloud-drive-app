import { FileItem } from "@/api/dto/files.dto";
import FileList, { FileSelectType } from "@/components/FileList";
import { useState } from "react";
import * as Api from "@/api";
import FileActions from "@/components/FileActions";
import EmptyFiles from "@/components/EmptyFiles";

interface FilesProps {
  items: FileItem[];
  withActions?: boolean;
}

const Files: React.FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = useState(items || []);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };

  const getSelectedFiles = (): FileItem[] => {
    return items.filter((item) => selectedIds.includes(item.id));
  };

  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              onClickRemove={onClickRemove}
              isActive={selectedIds.length > 0}
              getSelectedFiles={getSelectedFiles}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <EmptyFiles />
      )}
    </div>
  );
};

export default Files;
