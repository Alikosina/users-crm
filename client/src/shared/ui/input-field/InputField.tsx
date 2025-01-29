import { Controller, useFormContext } from "react-hook-form";
import { Input, InputProps } from "../input/Input";

type Props = InputProps & {
  name: string;
};

export const InputField = ({ name, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Input {...props} {...field} />}
    />
  );
};
