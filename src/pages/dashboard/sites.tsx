import React, { useCallback } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Navigation from "~/components/navigation";
import ProtectedArea from "~/components/protected-area";
import NewSiteModal, {
  type NewSiteModalHandle,
} from "~/components/new-site-modal";
import { api } from "~/utils/api";

const SitesPage: NextPage = () => {
  const modalRef = React.useRef<NewSiteModalHandle>(null);
  const listOwnSites = api.sites.listOwn.useQuery();

  const onDataChange = useCallback(
    async () => await listOwnSites.refetch(),
    []
  );

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
          <div className="flex flex-grow flex-col items-center overflow-auto bg-gray-100 p-4">
            <div className="flex w-full max-w-screen-xl flex-col">
              <div className="mb-4 flex w-full flex-row items-center">
                <h1 className="flex-grow text-xl font-bold">Your Sites</h1>
                <button
                  className="rounded bg-green-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-green-700"
                  onClick={() => modalRef.current?.open()}
                >
                  Add Site
                </button>
              </div>
              <div className="flex w-full flex-col rounded-md bg-gray-200 p-4">
                {listOwnSites.data ? (
                  listOwnSites.data.map((site) => <div>{site.name}</div>)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <NewSiteModal ref={modalRef} onDataChange={onDataChange} />
      </ProtectedArea>
    </>
  );
};

export default SitesPage;
