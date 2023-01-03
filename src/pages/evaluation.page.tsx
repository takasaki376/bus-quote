import { Divider, Container, Title, Text } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layouts";
import { client } from "src/lib/clientMicroCms";
import { EvaluationType } from "src/types";
import DateFormatter from "src/lib/date-formatter";
import Image from "next/image";
import { StarIcon } from "src/components/StarIcon";

export const getStaticProps: GetStaticProps = async () => {
  const evaluation = await client.get({ endpoint: "evaluation" });
  console.log("evaluation");
  return {
    props: { evaluationList: evaluation },
    revalidate: 30,
  };
};

type Props = { evaluationList: MicroCMSListResponse<EvaluationType> };

const Evaluation: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Container size="md" px="md">
        {props.evaluationList ? (
          <div className="px-12">
            <Title order={1} className="my-4 font-bold ">
              お客様の声
            </Title>
            <Divider />
            <ul>
              {props.evaluationList.contents.map((evaluation, key) => {
                return (
                  <li key={key}>
                    <div className="border">
                      <div className="flex flex-row ">
                        <Image
                          src={evaluation.avator.url}
                          alt={evaluation.id}
                          width={150}
                          height={150}
                        />
                        <div className="flex flex-col ml-2 my-2">
                          <div className="flex flex-row justify-between">
                            <Text fz="lg" weight={500} className="mb-4 mt-1">
                              <DateFormatter dateString={evaluation.date} />
                              {"  "}
                              {evaluation.age} {evaluation.sex}{" "}
                              {evaluation.address} {evaluation.objective}
                            </Text>
                            <div className="flex flex-row m-2">
                              {evaluation.star === 1 && (
                                <StarIcon className="w-8 h-8 text-black" />
                              )}
                              {evaluation.star >= 2 && (
                                <StarIcon className="w-8 h-8 text-black" />
                              )}
                              {evaluation.star >= 3 && (
                                <StarIcon className="w-8 h-8 text-black" />
                              )}
                              {evaluation.star >= 4 && (
                                <StarIcon className="w-8 h-8 text-black" />
                              )}
                              {evaluation.star >= 5 && (
                                <StarIcon className="w-8 h-8 text-black" />
                              )}
                            </div>
                          </div>
                          <Title order={3} className=" mb-6">
                            {evaluation.comment}
                          </Title>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>deta無し</div>
        )}
      </Container>
    </Layout>
  );
};

export default Evaluation;
