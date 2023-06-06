import { type NextPage } from "next";
import { SignIn } from "@clerk/nextjs";
import Head from "next/head";
import Navigation from "~/components/navigation";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - BlazeStats</title>
        <meta
          name="description"
          content="The next-generation of web analytics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen max-h-screen w-screen flex-col">
        <Navigation />
        <div className="flex w-full flex-grow flex-col items-center justify-center overflow-auto bg-gray-100">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
