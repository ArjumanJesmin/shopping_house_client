"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  password: string;
  customer: {
    name: string;
    email: string;
    contactNumber: string;
  };
}

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            {/* Name Field */}
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                {...register("customer.name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Name cannot exceed 20 characters",
                  },
                })}
              />
              {errors.customer?.name && (
                <p className="text-red-600 text-sm">
                  {errors.customer.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("customer.email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.customer?.email && (
                <p className="text-red-600 text-sm">
                  {errors.customer.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Contact Number Field */}
            <div className="grid gap-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                type="tel"
                placeholder="Contact Number"
                {...register("customer.contactNumber", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Contact number must be 10 digits",
                  },
                })}
              />
              {errors.customer?.contactNumber && (
                <p className="text-red-600 text-sm">
                  {errors.customer.contactNumber.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>

          {/* Link to Sign In */}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign In
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
