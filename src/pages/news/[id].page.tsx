import { Container, Title } from "@mantine/core";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/lib/clientMicroCms";
import { NewsType } from "src/types";
import { Layout } from "src/layouts";

type PathProps = { id: string };

type Props = NewsType;

export const getStaticProps: GetStaticProps<Props, PathProps> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail({
    endpoint: "news",
    contentId: ctx.params.id,
  });
  return {
    props: data,
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const data = await client.getList({
    endpoint: "news",
  });
  const ids = data.contents.map((content) => `/news/${content.id}`);
  return {
    paths: ids,
    fallback: true,
  };
};

const NewsId: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Container size="xl">
        <div dangerouslySetInnerHTML={{ __html: props.body }} />
      </Container>
    </Layout>
  );
};

export default NewsId;
