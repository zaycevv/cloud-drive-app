import UploadButton from "@/components/UploadButton";
import { NavLink } from "@mantine/core";
import { Files, Photo, Trash } from "tabler-icons-react";
import styles from "@/styles/DashboardLayout.module.css";
import { useRouter } from "next/router";
import Header from "@/components/Header";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const data = [
    {
      icon: <Files size="1rem" />,
      label: "All files",
      link: "/dashboard",
    },
    {
      icon: <Photo size="1rem" />,
      label: "Images",
      link: "/dashboard/images",
    },
    {
      icon: <Trash size="1rem" />,
      label: "Deleted",
      link: "/dashboard/trash",
    },
  ];

  return (
    <>
      <Header isDashboard />
      <main className={styles.dashboard}>
        <div className={styles.sidebar}>
          <UploadButton />
          <div className={styles.buttons}>
            {data.map((item, index) => (
              <NavLink
                variant="filled"
                key={item.label}
                label={item.label}
                icon={item.icon}
                onClick={() => router.push(item.link)}
                active={selectedMenu === item.link}
                color="dark"
                sx={{ borderRadius: "9px" }}
              />
            ))}
          </div>
        </div>

        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};
