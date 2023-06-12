import FlagIcon from "@/icons/FlagIcon";
import "./globals.css";
import { Inter } from "next/font/google";

import BurgerButton from "@/components/burger-button/BurgerButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golf Draft",
  description: "Draft your favorite golfers for the PGA Tour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>

      <body className={`${inter.className} fixed w-full`}>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <span className="h-8 mr-3">
                <FlagIcon />
              </span>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Golf Draft
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </div>
            <BurgerButton />
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
