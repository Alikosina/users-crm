import { APP_ROUTES } from "@/shared/constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const methods = useForm();

  const handleLogin = () => {
    navigate(APP_ROUTES.Login);
  };

  return {
    methods,
    handleLogin,
  };
};
