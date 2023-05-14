import { File } from "tabler-icons-react";
import styles from "./FileCard.module.css";
import { isImage } from "@/utils/isImage";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { getColorByExtension } from "@/utils/getColorByExtension";

interface FileCardProps {
  filename: string;
  originalName: string;
}

const FileCard: React.FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext) ? "http://localhost:7777/uploads/" + filename : "";

  const color = getColorByExtension(ext);
  const classColor = styles[color];

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={imageUrl} alt="File" />
        ) : (
          <File size="80px" color="#B0B5BA" strokeWidth={1.5} />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};

export default FileCard;
