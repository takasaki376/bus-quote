import type { ReactNode, FC } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="relative w-full">
        <Header />
        <div className="flex flex-col bg-gray-50 h-screen">
          {props.children}
        </div>
      </div>
    </>
  );
};
