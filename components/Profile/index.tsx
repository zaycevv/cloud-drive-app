import { Button, NavLink } from "@mantine/core";
import styles from "./ProfileContainer.module.css";
import { Upload, Files, Photo, Trash } from "tabler-icons-react";

const ProfileContainer: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1>Profile details</h1>
      <p>ID: </p>
      <p>Name: </p>
      <p>Email: </p>
    </main>
  );
};

export default ProfileContainer;
