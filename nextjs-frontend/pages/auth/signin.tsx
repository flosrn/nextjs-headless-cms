import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { providers, csrfToken, signIn } from "next-auth/client";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { I18nProps } from "next-rosetta";
import { MyLocale } from "i18n/index";
import LayoutPage from "components/ui/layout-page";
import Alert from "components/ui/alert";

interface Props {
  providersList: any;
  token: string;
}

const SignInPage: React.FC<Props> = ({ providersList, token }) => {
  const { query } = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const [formType, setFormType] = useState<string | string[]>(query.form);
  const [isAlertOpen, setAlertOpen] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<string | string[]>(null);
  const [errorMessage, setErrorMessage] = useState<string | string[]>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setFormType(query.form);
    setErrorCode(query.errorCode || query.error);
    setErrorMessage(query.errorMessage);
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setAlertOpen(!!errorCode);
    }, 1000);
  }, [errorCode]);

  const onSubmit = (data) => {
    setLoading(true);
    return signIn("credentials", { ...data, formType });
  };

  return (
    <LayoutPage hideFooter>
      <section className="relative w-screen h-screen mb-36">
        <div className="absolute w-full top-0 left-0 right-0 bottom-0 flex justify-center  m-0 -z-10">
          <Image
            src="/images/register_bg_2.png"
            layout="fill"
            className="absolute object-contain xl:object-cover object-top bg-no-repeat w-full -z-10"
            quality={50}
          />
        </div>

        <div className="container mx-auto px-4 h-full z-50">
          <div className="flex flex-col content-center items-center h-full pt-10 pb-30">
            <AnimateSharedLayout>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.3 } }}
                className="w-full lg:w-4/12 px-4"
              >
                <AnimatePresence>
                  {isAlertOpen && (
                    <Alert
                      type="error"
                      title={errorCode}
                      content={errorMessage}
                      closeHandler={() => setAlertOpen(false)}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  layout
                  className="relative flex flex-col justify-center min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
                >
                  {formType !== "verify-request" && formType !== "newUser" ? (
                    <>
                      <div className="rounded-t mb-0 px-6 py-6">
                        <motion.div layout className="text-center mb-3">
                          <h6 className="text-gray-600 text-sm font-bold">
                            {formType === "signup" && "Sign up"}
                            {formType === "signin" && "Sign in"} with
                          </h6>
                        </motion.div>
                        <motion.div layout className="btn-wrapper text-center">
                          {Object.values(providersList)?.map((provider: any) => {
                            if (provider.id !== "credentials") {
                              return (
                                <motion.button
                                  whileHover={{ y: -2, scale: 1.02 }}
                                  whileTap={{ scale: 0.9 }}
                                  key={provider.id}
                                  onClick={() => signIn(provider.id)}
                                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                  type="button"
                                  style={{ transition: "all .15s ease" }}
                                >
                                  <Image src={`/logo/${provider.id}.svg`} width={20} height={20} />
                                  <span className="ml-3">{provider.name}</span>
                                </motion.button>
                              );
                            }
                          })}
                        </motion.div>
                        <motion.hr layout className="mt-6 border-b-1 border-gray-400" />
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <motion.div layout className="text-gray-500 text-center mb-3 font-bold">
                          <small>
                            Or {formType === "signup" && "register"}
                            {formType === "signin" && "sign in"} with email
                          </small>
                        </motion.div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input name="csrfToken" type="hidden" defaultValue={token} />
                          <motion.div layout className="relative w-full mb-5">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="Email"
                              ref={register({ required: true })}
                            />
                            {errors.email && (
                              <span className="text-sm text-red-500 pl-2">
                                This field is required
                              </span>
                            )}
                          </motion.div>
                          <AnimatePresence>
                            {formType === "signup" && (
                              <motion.div
                                layout
                                initial={{ opacity: 0, y: 80, scale: 0.3 }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                  transition: { duration: 0.3 },
                                }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                              >
                                <div className="relative w-full mb-5">
                                  <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    placeholder="First Name"
                                    ref={register({
                                      required: formType === "signup",
                                    })}
                                  />
                                  {errors.firstName && (
                                    <span className="text-sm text-red-500 pl-2">
                                      This field is required
                                    </span>
                                  )}
                                </div>
                                <div className="relative w-full mb-5">
                                  <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    placeholder="lastName"
                                    ref={register({ required: formType === "signup" })}
                                  />
                                  {errors.lastName && (
                                    <span className="text-sm text-red-500 pl-2">
                                      This field is required
                                    </span>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <motion.div layout className="relative w-full mb-5">
                            <motion.label
                              layout
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Password
                            </motion.label>
                            <motion.input
                              layout
                              type="password"
                              id="password"
                              name="password"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="Choose a strog password"
                              aria-invalid={errors.password ? "true" : "false"}
                              ref={register({ required: true })}
                            />
                            <AnimatePresence>
                              {errors.password && (
                                <motion.span
                                  layout
                                  role="alert"
                                  className="text-sm text-red-500 pl-2"
                                >
                                  This field is required
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.div>
                          <AnimatePresence>
                            {formType === "signup" && (
                              <motion.div
                                layout
                                initial={{ opacity: 0, y: 80, scale: 0.3 }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                  transition: { duration: 0.3 },
                                }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                className="relative w-full mb-5"
                              >
                                <motion.label
                                  layout
                                  htmlFor="passwordRepeat"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Password repeat
                                </motion.label>
                                <motion.input
                                  layout
                                  type="password"
                                  id="passwordRepeat"
                                  name="passwordRepeat"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  placeholder="Confirm your chosen password"
                                  aria-invalid={errors.passwordRepeat ? "true" : "false"}
                                  ref={register({
                                    required: true,
                                    validate: (value) => value === watch("password"),
                                  })}
                                />
                                <AnimatePresence>
                                  {errors.passwordRepeat &&
                                    errors.passwordRepeat.type === "required" && (
                                      <motion.span
                                        layout
                                        role="alert"
                                        className="text-sm text-red-500 pl-2"
                                      >
                                        The password is required
                                      </motion.span>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence>
                                  {errors.passwordRepeat &&
                                    errors.passwordRepeat.type === "validate" && (
                                      <motion.span
                                        layout
                                        role="alert"
                                        className="text-sm text-red-500 pl-2"
                                      >
                                        Passwords are not the same !
                                      </motion.span>
                                    )}
                                </AnimatePresence>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <motion.div layout>
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                id="customCheckLogin"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              />
                              <span className="ml-2 text-sm font-semibold text-gray-700">
                                Remember me
                              </span>
                            </label>
                          </motion.div>

                          <motion.div layout className="text-center mt-6">
                            <motion.button
                              whileHover={{ y: -2, scale: 1.02 }}
                              whileTap={{ scale: 0.9 }}
                              disabled={isLoading}
                              className="flex justify-center items-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                              type="submit"
                            >
                              {formType === "signup" ? "Sign Up" : "Sign in"}
                              {isLoading && (
                                <svg
                                  className="animate-spin -mr-1 ml-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                              )}
                            </motion.button>
                          </motion.div>

                          <motion.div className="flex justify-center items-center mt-3 -mb-5 text-indigo-500 underline">
                            {formType === "signup" ? (
                              <Link href="/auth/signin?form=signin">
                                <a onClick={() => setFormType("signin")}>
                                  <small>Already an account ?</small>
                                </a>
                              </Link>
                            ) : (
                              <Link href="/auth/signin?form=signup">
                                <a onClick={() => setFormType("signin")}>
                                  <small>Create an account</small>
                                </a>
                              </Link>
                            )}
                          </motion.div>
                        </form>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center p-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-700"
                      >
                        {formType === "verify-request" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        )}
                        {formType === "newUser" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                          />
                        )}
                      </svg>
                      {formType === "verify-request" && (
                        <div className="text-center mt-3">
                          A confirmation email have been sent to you, check your inmail box and
                          click on the link for complete your registration.
                        </div>
                      )}
                      {formType === "newUser" && (
                        <div className="text-center mt-3 text-green-400">
                          Your email address are confirmed :)
                        </div>
                      )}

                      {formType === "newUser" && (
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-12">
                          <div className="text-center mt-4">
                            {formType === "newUser" && (
                              <button
                                type="submit"
                                className="text-indigo-600 underline cursor-pointer"
                                onClick={() => setFormType("signin")}
                              >
                                Sign in
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>

                <motion.div layout className="flex flex-wrap">
                  <div className="w-1/2">
                    <a href="#pablo" className="text-gray-300">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimateSharedLayout>
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
