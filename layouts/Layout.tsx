import { Container } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const bgColor = selectedMenu === "/" ? "white" : "#ECF0F2";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main style={{ backgroundColor: bgColor }}>
        <Container size="xl">{children}</Container>
      </main>
    </>
  );
};
