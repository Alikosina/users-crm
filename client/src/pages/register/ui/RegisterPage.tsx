import { RegisterForm } from "@/features/register-form";
import { AuthLayout } from "@/widgets/auth-layout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};
