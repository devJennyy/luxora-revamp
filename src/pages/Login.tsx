import Form from "@/components/shared/Form";
import WobbleImages from "@/components/shared/WobbleImages";
import LoadingAnimation from "@/components/ui/loading";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <main>
      {isLoading && <LoadingAnimation />}

      <section
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 lg:!my-24 !my-5 flex xl:justify-between justify-center items-center xl:gap-0 lg:gap-5`}
      >
        <WobbleImages />
        <Form forSignup={false} />
      </section>
    </main>
  );
};

export default Login;
