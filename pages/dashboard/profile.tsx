import { User } from "@/api/dto/auth.dto";
import { checkAuth } from "@/utils/checkAuth";
import { GetServerSidePropsContext, NextPage } from "next";
import * as Api from "@/api";
import { Layout } from "@/layouts/Layout";
import { Avatar, Flex } from "@mantine/core";
import Header from "@/components/Header";

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  return (
    <>
      <Header isDashboard />
      <main
        style={{
          backgroundColor: "#ffff",
          padding: "20px",
          borderRadius: "18px",
        }}
      >
        <h1>Profile details</h1>
        <Flex
          align="center"
          gap="xl"
          sx={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Avatar
            src={null}
            sx={{ width: "150px", height: "150px", borderRadius: "100%" }}
          />
          <div>
            <p>
              <b>ID: </b>
              {userData.id}
            </p>
            <p>
              <b>Name: </b>
              {userData.fullName}
            </p>
            <p>
              <b>Email: </b>
              {userData.email}
            </p>
          </div>
        </Flex>
      </main>
    </>
  );
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Drive Cloud - Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
