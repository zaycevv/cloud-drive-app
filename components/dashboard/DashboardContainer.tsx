import { Button, NavLink } from "@mantine/core";
import styles from "./DashboardContainer.module.css";
import { Upload, Files, Photo, Trash } from "tabler-icons-react";

const DashboardContainer: React.FC = () => {
  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <Button color="#008FFD" radius="xl" leftIcon={<Upload size="1rem" />}>
          Upload file
        </Button>
        <div className={styles.buttons}>
          <NavLink
            variant="filled"
            label="Files"
            icon={<Files size="1rem" />}
          />
          <NavLink
            variant="filled"
            label="Photos"
            icon={<Photo size="1rem" />}
          />
          <NavLink
            variant="filled"
            label="Deleted"
            icon={<Trash size="1rem" />}
          />
        </div>
      </div>

      <div className={styles.container}></div>
    </main>
  );
};

export default DashboardContainer;
