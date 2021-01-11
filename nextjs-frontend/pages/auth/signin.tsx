import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { providers, csrfToken, signIn } from "next-auth/client";
import { useForm } from "react-hook-form";
import { I18nProps } from "next-rosetta";
import { MyLocale } from "i18n/index";
import LayoutPage from "components/ui/layout-page";

// import signin from "pages/api/auth/signin";

interface Props {
  providersList: any;
  token: string;
}

const SignInPage: React.FC<Props> = ({ providersList, token }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    return signIn("credentials", { email: data.email, password: data.password });
  };

  return (
    <LayoutPage>
      <section className="relative w-screen h-screen">
        <div className="absolute w-full top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden m-0">
          <Image
            src="/images/register_bg_2.png"
            layout="fill"
            className="absolute object-contain xl:object-cover object-top bg-no-repeat w-full"
          />
        </div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    {Object.values(providersList)?.map((provider: any) => {
                      if (provider.id !== "credentials") {
                        return (
                          <button
                            key={provider.id}
                            onClick={() => signIn(provider.id)}
                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            <Image src={`/logo/${provider.id}.svg`} width={20} height={20} />
                            <span className="ml-3">{provider.name}</span>
                          </button>
                        );
                      }
                    })}
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with email</small>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    // method="post"
                    // action="/api/auth/signin/email"
                  >
                    <input name="csrfToken" type="hidden" defaultValue={token} />
                    <div className="relative w-full mb-5">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="px-3 py-3 mb-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        ref={register({ required: true })}
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500 pl-2">This field is required</span>
                      )}
                    </div>
                    <div className="relative w-full mb-5">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        className="px-3 py-3 mb-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        ref={register({ required: true })}
                      />
                      {errors.password && (
                        <span className="text-sm text-red-500 pl-2">This field is required</span>
                      )}
                    </div>

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-gray-300">
                    <small>Forgot password?</small>
                  </a>
                </div>
                {/*<div className="w-1/2 text-right">*/}
                {/*  <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-gray-300">*/}
                {/*    <small>Create new account</small>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export const getServerSideProps: GetServerSideProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return {
    props: {
      table,
      token: await csrfToken(context),
      providersList: await providers(context),
    },
  };
};

export default SignInPage;
