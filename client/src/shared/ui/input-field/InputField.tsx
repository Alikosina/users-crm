import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../input/Input";

type Props = {
  name: string;
};

export const InputField = ({ name }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Input {...field} />}
    />
  );
};
