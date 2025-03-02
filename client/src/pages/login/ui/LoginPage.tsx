import { AuthLayout } from "@/widgets/auth-layout";
import { LoginForm } from "@/features/login-form";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
