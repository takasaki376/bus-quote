import { Accordion, Container, Title, Tabs } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { HeaderTabButton } from "src/components/TabButton";
import { Layout } from "src/layouts";
import { client } from "src/lib/clientMicroCms";
import { QuestionType } from "src/types";
// import { Tabs } from "@mantine/core";

export const getStaticProps: GetStaticProps = async () => {
  const question = await client.get({ endpoint: "question" });
  console.log("question");
  return {
    props: { questionList: question },
    revalidate: 30,
  };
};

type Props = { questionList: MicroCMSListResponse<QuestionType> };

const question: NextPage<Props> = (props) => {
  const [selectTabIndex, setSelectTabIndex] = useState<string>("0");
  const handleSelectPriceTab = () => {
    setSelectTabIndex("0");
  };

  const handleSelectBusTab = () => {
    setSelectTabIndex("1");
  };

  const handleSelectOtherTab = () => {
    setSelectTabIndex("2");
  };

  return (
    <Layout>
      <Container size="md" px="md">
        <div className="flex justify-around w-full h-12 whitespace-nowrap bg-gray-100 rounded-md">
          <HeaderTabButton
            id={"0"}
            selected={selectTabIndex}
            onClick={handleSelectPriceTab}
          >
            料金について
          </HeaderTabButton>
          <HeaderTabButton
            id={"1"}
            selected={selectTabIndex}
            onClick={handleSelectBusTab}
          >
            バスについて
          </HeaderTabButton>
          <HeaderTabButton
            id={"2"}
            selected={selectTabIndex}
            onClick={handleSelectOtherTab}
          >
            その他
          </HeaderTabButton>
        </div>
        <div>
          <ul>
            <Accordion variant="contained">
              {props.questionList.contents
                .filter((question) => {
                  return question.class === selectTabIndex;
                })
                .map((question, key) => {
                  return (
                    <Accordion.Item value={String(key)}>
                      <Accordion.Control>{question.question}</Accordion.Control>
                      <Accordion.Panel>{question.req}</Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
            </Accordion>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default question;
