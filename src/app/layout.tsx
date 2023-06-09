import AppLayout from "@/components/Layout";
import Provider from "@/components/SessionProvider/Provider";

import { Inter } from "next/font/google";

import "@/styles/_app.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/_app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Age Of 23",
  description: "Things of Age 23",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <AppLayout>
            {children}

            <ToastContainer />
          </AppLayout>
        </Provider>
      </body>
    </html>
  );
}
