import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Divider, Text, Title } from "@mantine/core";
import { client } from "src/lib/clientMicroCms";
import { NewsType } from "src/types";
import { Layout } from "src/layouts";
import DateFormatter from "src/lib/date-formatter";

export const getStaticProps: GetStaticProps = async () => {
  const newsList = await client.get({ endpoint: "news" });
  return {
    props: { newsList: newsList },
    revalidate: 10,
  };
};

type Props = { newsList: MicroCMSListResponse<NewsType> };

const Home: NextPage<Props> = (props) => {
  return (
    <Layout>
      {props.newsList ? (
        <div className="px-12">
          <Title order={1} className="my-4 font-bold ">
            新着ニュース
          </Title>
          <Divider />
          <ul>
            {props.newsList.contents.map((news, key) => {
              return (
                <li key={key}>
                  <Link href={`/news/${news.id}`} passHref>
                    <Text weight={500} color="gray" className="mb-4 mt-1">
                      <DateFormatter dateString={news.date} />
                    </Text>
                    <Title order={3} className="mt-2 mb-6">
                      {news.title}
                    </Title>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>deta無し</div>
      )}
    </Layout>
  );
};

export default Home;
