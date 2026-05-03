"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function Register() {
    const router=useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });
      console.log({ data, error });
      if (!error) {
          router.push('/')
      }
    };
     const handelGoogleSignIn = async () => {
       const data = await authClient.signIn.social({
         provider: "google",
       });
     };

  return (
    <div className="min-h-90vh flex items-center justify-center bg-gray-50 px-4 py-3">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 py-4 px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500">
            Fill in the details below to register
          </p>
        </div>

        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (!value || value.trim().length < 2) {
                return "Name must be at least 2 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField
            isRequired
            name="image"
            type="url"
            validate={(value) => {
              if (!value || value.trim() === "") {
                return "Image URL is required";
              }
              try {
                const url = new URL(value);
                if (!["http:", "https:"].includes(url.protocol)) {
                  return "Image URL must use http or https";
                }
              } catch {
                return "Please enter a valid URL";
              }
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/image.png" />
            <Description>Must be a direct link to an image</Description>
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-1">
            <Button type="submit" className="flex-1">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary" className="flex-1">
              Reset
            </Button>
          </div>
        </Form>
        <p className="text-center my-1">or</p>
        <Button
          onClick={handelGoogleSignIn}
          className="w-full"
          variant="outline"
        >
          <GrGoogle />
          Sign in with Google
        </Button>

        <p className="text-center text-sm text-gray-500 mt-2">
          Already Registered?{" "}
          <Link
            href="/sign-in"
            className="text-blue-600 font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
