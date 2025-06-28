import Form from "@/components/shared/Form";
import WobbleImages from "@/components/shared/WobbleImages";

const Login = () => {
  return (
    <div className="w-full max-w-[1280px] !mx-auto xl:px-10 sm:px-5 px-4 lg:!my-24 !my-5 flex xl:justify-between justify-center items-center xl:gap-0 lg:gap-5">
      <WobbleImages />
      <Form forSignup={false}       
      />
    </div>
  );
};

export default Login;
