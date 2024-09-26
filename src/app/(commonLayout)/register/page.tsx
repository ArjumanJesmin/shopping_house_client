import { RegisterForm } from "@/app/components/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
