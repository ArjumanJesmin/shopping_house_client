import { LoginForm } from "@/app/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
