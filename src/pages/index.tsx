import { type NextPage } from "next";
import Head from "next/head";
import Navigation from "~/components/navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlazeStats</title>
        <meta
          name="description"
          content="The next-generation of web analytics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen max-h-screen w-screen flex-col">
        <Navigation />
        <main className="flex w-full flex-grow flex-col items-center justify-center overflow-auto bg-gray-100">
          <div className="container relative -mt-12 flex min-h-screen w-full flex-col items-center justify-center gap-12 py-16 md:px-4">
            <div
              className="absolute left-24 h-96 w-96 animate-blob rounded-full bg-rose-500 opacity-50 mix-blend-multiply blur-3xl"
              aria-hidden="true"
            ></div>
            <div
              className="animation-delay-2500 absolute bottom-24 h-96 w-96 animate-blob rounded-full bg-red-500 opacity-50 mix-blend-multiply blur-3xl"
              aria-hidden="true"
            ></div>
            <div
              className="animation-delay-4000 absolute right-32 h-96 w-96 animate-blob rounded-full bg-red-400 opacity-50 mix-blend-multiply blur-3xl"
              aria-hidden="true"
            ></div>
            <div className="z-10 text-center">
              <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-rose-950 sm:text-[5rem]">
                <span className="text-rose-600">Blaze</span>Stats
              </h1>
              <p className="text-xl">
                The <span className="text-rose-600">last</span> web analytics
                tool you'll ever need.
              </p>
            </div>
            <div className="absolute bottom-10 animate-bounce">Scroll down</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
