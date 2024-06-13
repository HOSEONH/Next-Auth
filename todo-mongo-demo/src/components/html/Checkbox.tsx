import { useId } from "react";

const Checkbox = ({
  checked,
  onChange,
  children,
}: {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}) => {
  const uuid = useId();
  return (
    <>
      <div className="flex items-center gap-2 [&>input:checked+label:before]:content-['✓'] [&>input:checked+label:before]:text-white [&>input:checked+label:before]:flex [&>input:checked+label:before]:justify-center [&>input:checked+label:before]:items-center [&>input:checked+label:before]:text-sm">
        <input
          type="checkbox"
          id={uuid}
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <label
          htmlFor={uuid}
          className="w-5 h-5 inline-block rounded-[5px] bg-[#4F4F4F] border border-[#4F4F4F]"
        ></label>
        {children}
      </div>
    </>
  );
};
export default Checkbox;
