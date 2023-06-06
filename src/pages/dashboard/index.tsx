import { type NextPage } from "next";
import Head from "next/head";
import Navigation from "~/components/navigation";
import { useUser } from "@clerk/nextjs";
import ProtectedArea from "~/components/protected-area";

const DashboardPage: NextPage = () => {
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Dashboard - BlazeStats</title>
        <meta
          name="description"
          content="The next-generation of web analytics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProtectedArea>
        <div className="flex h-screen max-h-screen w-screen flex-col">
          <Navigation />
          <div className="w-full flex-grow overflow-auto bg-gray-100">
            <h1 className="p-4 text-xl font-bold">
              Welcome
              {user
                ? `, ${user.fullName || user.firstName || user.username || ""}`
                : ""}
              ! 👋
            </h1>
          </div>
        </div>
      </ProtectedArea>
    </>
  );
};

export default DashboardPage;
