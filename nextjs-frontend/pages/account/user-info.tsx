import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { I18nProps } from "next-rosetta";
import LayoutAccountPage from "components/ui/layout-account-page";
import { MyLocale } from "i18n";
import ISession from "interfaces/session";

interface Props {
  session: ISession;
  isMobile: boolean;
}

const UserInfoPage: React.FC<Props> = ({ session, isMobile }) => {
  return (
    <LayoutAccountPage isMobile={isMobile}>
      <div className="py-10 px-5">
        <div className="text-2xl text-white">User information</div>
      </div>
      <div className="bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mb-36"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">First name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Last name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        defaultValue={session?.user.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="button"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAccountPage>
  );
};

export const getServerSideProps: GetServerSideProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );
  return {
    props: {
      table,
      isMobile,
      session: await getSession(context),
    },
  };
};

export default UserInfoPage;
