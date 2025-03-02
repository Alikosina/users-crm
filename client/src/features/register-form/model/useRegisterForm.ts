import { useForm } from "react-hook-form";

export const useRegisterForm = () => {
  const methods = useForm();

  return {
    methods,
  };
};
