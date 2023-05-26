import Header from "@/components/Header";
import { Layout } from "@/layouts/Layout";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowNarrowRight,
  BrandGithub,
  Gauge,
  User,
  Cookie,
} from "tabler-icons-react";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "We are constantly working to improve our infrastructure to provide the fastest possible experience and instant access to your data",
    icon: Gauge,
  },
  {
    title: "Privacy focused",
    description:
      "We are fully aware of the importance of protecting the privacy of our customers data",
    icon: User,
  },
  {
    title: "No third parties",
    description:
      "Our customers are important to us and we guarantee that your data will not be shared with third parties. We do not sell or share any of your personal information, you are completely safe",
    icon: Cookie,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
  },

  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  footer__inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },

  inner: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(120),
    marginLeft: "0",
    marginRight: "0",

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export default function MainPage() {
  const router = useRouter();
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl">
      <feature.icon size="2rem" color="#008FFD" />
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <Container
          size={700}
          className={classes.inner}
          sx={{ marginBottom: "210px" }}
        >
          <h1 className={classes.title}>
            Save your{" "}
            <Text component="span" color="primary" inherit>
              data storage
            </Text>{" "}
            here
          </h1>

          <Text className={classes.description} color="dimmed">
            Cloud Drive is a free cloud-based file storage and secure sharing
            platform
          </Text>

          <Group className={classes.controls}>
            <Button
              rightIcon={<ArrowNarrowRight />}
              variant="filled"
              color="primary"
              size="xl"
              radius="xl"
              sx={{ svg: { marginLeft: "5px" } }}
              onClick={() => router.push("dashboard/register")}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/0xzay/cloud-drive-app"
              size="xl"
              radius="xl"
              variant="default"
              leftIcon={<BrandGithub size="1.5rem" />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
        <Container size="lg" py="xl" sx={{ marginBottom: "210px" }}>
          <Group position="center">
            <Badge variant="filled" size="lg">
              Best cloud ever
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Keep your files safe
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            We will provide your files with secure storage and access from
            anywhere in the world
          </Text>

          <SimpleGrid
            cols={3}
            spacing="xl"
            mt={50}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {features}
          </SimpleGrid>
        </Container>
        <div className={classes.footer}>
          <Container className={classes.footer__inner}>
            <svg
              width="40"
              height="29"
              viewBox="0 0 40 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.8909 8.48081C32.8909 8.48081 31.4849 4.84713 27.7729 2.36313C19.2089 -3.37087 7.46094 1.87907 6.12894 12.1991C6.11894 12.2751 6.0089 12.279 6.0709 12.263C2.2629 13.211 -0.475057 16.8611 0.0689431 21.0711C0.800943 26.7451 7.99894 29.6509 7.99894 25.8949C7.99894 23.5849 7.15894 24.3092 5.57694 23.1332C1.40694 20.0332 6.21093 13.5011 10.4729 16.8871C7.85693 8.27106 16.9729 1.10113 24.6249 5.15513C27.3529 6.59913 29.2349 9.2272 29.7989 12.0272C35.4709 11.8232 38.8369 19.5647 32.9669 23.1087C32.3729 23.4667 31.9989 24.111 31.9989 24.805C31.9989 26.279 33.5809 27.3008 34.8689 26.5848C35.4729 26.2508 36.0409 25.859 36.5609 25.411C42.5549 20.257 40.3269 10.7388 32.8909 8.48081ZM27.9989 26.3451V26.2308C27.9989 26.2448 27.9929 26.2549 27.9929 26.2669C27.9929 26.2929 27.9989 26.3191 27.9989 26.3451ZM27.9929 26.2669C27.9709 27.3489 27.0909 28.0072 26.0009 28.0072H13.9989C10.8849 28.0072 11.8189 24.0072 13.9989 24.0072H26.0009C27.0789 24.0072 27.9529 25.1829 27.9929 26.2669Z"
                fill="#008FFD"
              />
            </svg>
            <Text size="sm" opacity="0.5">
              © 2023 cloud drive. All rights reserved.
            </Text>

            <Group
              spacing={0}
              className={classes.links}
              position="right"
              noWrap
            >
              <Link href="https://github.com/0xzay/cloud-drive-app">
                <ActionIcon size="lg" radius="xl">
                  <BrandGithub size="1.05rem" color="#008FFD" />
                </ActionIcon>
              </Link>
            </Group>
          </Container>
        </div>
      </div>
    </>
  );
}

MainPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Home - Cloud Drive">{page}</Layout>;
};
