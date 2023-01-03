import cc from "classcat";
import type { DOMAttributes, ReactNode, FC } from "react";

type InputType = {
  id?: string;
  children?: ReactNode;
  className?: string;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
  selected: string | null;
};

export const HeaderTabButton: FC<InputType> = (props) => {
  const className = cc([
    props.className,
    "px-20 py-4 shadow-lg text-xs mx-0.5 focus:outline-none w-80",
    props.id !== props.selected
      ? "text-gray-400 bg-blue-100 hover:bg-blue-200"
      : "text-gray-100 bg-blue-600 hover:bg-blue-500",
  ]);

  return (
    <button onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
};

export const FooterTabButton: FC<InputType> = (props) => {
  const inputClasses = cc([
    props.className,
    "text-sm text-gray-400 bg-gray-100 h-full w-full focus:outline-none",
    props.id !== props.selected
      ? "text-gray-500 hover:bg-gray-300"
      : "text-gray-600 bg-gray-300",
  ]);

  return (
    <button onClick={props.onClick} className={cc([inputClasses])}>
      {props.children}
    </button>
  );
};
