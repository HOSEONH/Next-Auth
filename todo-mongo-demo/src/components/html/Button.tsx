import React from "react";

type TButtonProps = React.ComponentProps<"button"> & {
  style?: string;
  children: React.ReactNode;
};
const Button = (props: TButtonProps) => {
  const { children, style = "bg-[#4f4f4f] text-white", ...restProps } = props;
  return (
    <>
      <button
        {...restProps}
        className={`w-[325px] h-11 rounded-lg text-sm disabled:bg-gray-500 disabled:cursor-not-allowed ${style}`}
      >
        {children}
      </button>
    </>
  );
};
export default React.memo(Button);
