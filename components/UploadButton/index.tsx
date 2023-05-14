import { useState } from "react";
import { FileButton, Button } from "@mantine/core";
import { ExclamationMark, Upload } from "tabler-icons-react";
import * as Api from "@/api";
import { notifications } from "@mantine/notifications";

const UploadButton: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onUploadSuccess = async (file: File) => {
    try {
      await Api.files.uploadFile(file);

      setFiles([]);

      window.location.reload();
    } catch (err) {
      console.warn(err);
      notifications.show({
        withCloseButton: true,
        icon: <ExclamationMark size="1rem" />,
        title: "Error!",
        message: "Upload error",
        radius: "md",
        color: "red",
      });
    }
  };

  return (
    <FileButton onChange={(file: File) => onUploadSuccess(file)}>
      {(props) => (
        <Button
          radius="xl"
          leftIcon={<Upload size="1rem" />}
          sx={{ height: "45px" }}
          {...props}
        >
          Upload files
        </Button>
      )}
    </FileButton>
  );
};

export default UploadButton;
