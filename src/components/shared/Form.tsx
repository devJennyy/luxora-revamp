import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

interface Props {
  forSignup: boolean;
}

const Form = ({ forSignup }: Props) => {
  const [showPassword] = useState(false);
  const heading = forSignup ? "Create an account" : "Welcome Back!";
  const inputTitle = forSignup
    ? "Email address or phone number"
    : "Phone number, username, or email address";
  const buttonLabel = forSignup ? "Create account" : "Log in";
  const footerQuestion = forSignup
    ? "Already have an account?"
    : "New to Luxora?";
  const footerPrompt = forSignup ? "Log in" : "Sign up";
  const href = forSignup ? "/login" : "/signup";

  return (
    <div className="bg-white w-full lg:max-w-[500px] max-w-[640px] xl:border rounded-3xl md:p-10 sm:p-5 p-3 flex flex-col gap-10 xl:!mr-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p className="text-sm text-muted">Please enter your details.</p>
      </div>

      <div className="flex flex-col gap-5 text-sm">
        {forSignup ? (
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-secondary">First name</p>
              <input
                type="text"
                className="w-full h-11 pl-4 pr-12 border rounded-lg outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-secondary">Last Name</p>
              <input
                type="text"
                className="w-full h-11 pl-4 pr-12 border rounded-lg outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col gap-2">
          <p className="text-secondary">{inputTitle}</p>
          <input
            type="text"
            className="w-full h-11 pl-4 pr-12 border rounded-lg outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-secondary">Password</p>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-11 px-4 border rounded-lg outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
          />
          {forSignup ? (
            ""
          ) : (
            <>
              <p className="text-end underline underline-offset-2 cursor-pointer !mt-[2px]">
                Forgot Password?
              </p>
              <div className="flex items-center gap-2">
                <Checkbox className="border-primary" />
                <p>Remember me</p>
              </div>
            </>
          )}
        </div>

        <button className="w-full h-12 border border-primary bg-primary rounded-lg flex justify-center items-center text-white transition-default hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary focus:bg-transparent focus:text-primary cursor-pointer">
          <p className="font-medium text-base">{buttonLabel}</p>
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full"></div>

      <div className="flex flex-col gap-2">
        <button className="w-full h-12 border hover:border-secondary/30 active:border-secondary/30 focus:border-secondary/30 transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer">
          <FcGoogle size={20} />
          <p className="text-sm">Continue with Google</p>
        </button>
        <button className="w-full h-12 border hover:border-secondary/30 active:border-secondary/30 focus:border-secondary/30 transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer">
          <FaFacebook size={19} className="text-blue-600" />
          <p className="text-sm">Continue with Facebook</p>
        </button>
      </div>

      <p className="text-center text-sm text-secondary">
        {footerQuestion}
        <Link
          to={href}
          className="text-primary font-semibold underline underline-offset-4 !ml-1"
        >
          {footerPrompt}
        </Link>
      </p>
    </div>
  );
};

export default Form;
