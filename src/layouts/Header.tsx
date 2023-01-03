import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image
        src="/logo.jpg"
        alt="logo"
        width={500}
        height={150}
        objectFit="contain"
      />
      <div className="flex flex-row">
        <Link href="/" passHref>
          <div className="m-8 p-4 bg-cyan-300 rounded-lg w-40 text-center">
            Top
          </div>
        </Link>
        <Link href="/question" passHref>
          <div className="m-8 p-4 bg-cyan-300 rounded-lg w-40 text-center">
            よくある質問
          </div>
        </Link>
        <Link href="/evaluation" passHref>
          <div className="m-8 p-4 bg-cyan-300 rounded-lg w-40 text-center">
            お客様の声
          </div>
        </Link>
      </div>
    </div>
  );
};
