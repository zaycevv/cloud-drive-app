import { Button, Popover, Text, Flex, Modal } from "@mantine/core";
import styles from "./FileActions.module.css";
import { ExclamationMark, Share } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import { FileItem } from "@/api/dto/files.dto";
import { isTemplateExpression } from "typescript";

interface FileActionsProps {
  onClickRemove: VoidFunction;
  isActive: boolean;
  getSelectedFiles: () => FileItem[];
}

const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  isActive,
  getSelectedFiles,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const shareFiles = getSelectedFiles();
  return (
    <div className={styles.root}>
      <Modal opened={opened} size="lg" onClose={close} withCloseButton={false}>
        <Share size="2rem" />
        {shareFiles.length > 1 ? (
          <Text weight="bold">Here is a links to your files:</Text>
        ) : (
          <Text weight="bold">Here is a link to your file:</Text>
        )}
        {shareFiles.map((file) => (
          <div key={file.id}>
            <a href={"http://localhost:7777/uploads/" + file.filename}>
              {"http://localhost:7777/uploads/" + file.filename}
            </a>
          </div>
        ))}
      </Modal>
      <Flex gap="xs">
        <Button disabled={!isActive} variant="default" onClick={open}>
          Share
        </Button>
        <Popover closeOnEscape={true}>
          <Popover.Target>
            <Button disabled={!isActive} color="red">
              Delete
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Flex gap="xs" align="center">
              <svg
                fill="#fa5252"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "20px" }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9765 32.2422 C 29.1014 32.2422 29.7343 31.6094 29.7577 30.3906 L 30.1093 18.0156 C 30.1327 16.8203 29.1952 15.9297 27.9530 15.9297 C 26.6874 15.9297 25.7968 16.7968 25.8202 17.9922 L 26.1249 30.3906 C 26.1483 31.5859 26.8046 32.2422 27.9765 32.2422 Z M 27.9765 39.8594 C 29.3124 39.8594 30.5077 38.7812 30.5077 37.4219 C 30.5077 36.0390 29.3358 34.9844 27.9765 34.9844 C 26.5936 34.9844 25.4452 36.0625 25.4452 37.4219 C 25.4452 38.7578 26.6171 39.8594 27.9765 39.8594 Z"></path>
                </g>
              </svg>
              <Text size="sm" weight="bold">
                Delete file(s)?
              </Text>
            </Flex>
            <Text size="sm" sx={{ marginBottom: "5px", opacity: "0.5" }}>
              All files will be moved to trash
            </Text>
            <Button size="xs" onClick={onClickRemove}>
              Yes
            </Button>
          </Popover.Dropdown>
        </Popover>
      </Flex>
    </div>
  );
};

export default FileActions;
