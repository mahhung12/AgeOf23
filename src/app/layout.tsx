import AppLayout from "@/components/Layout";
import Provider from "@/components/SessionProvider/Provider";

import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "@/styles/_app.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/_app.scss";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://age-of-23.vercel.app/"),
  title: {
    default: "Age of 23",
    template: `%s | Age of 23`,
  },
  description: "Things of Age 23",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unused = 2;

  return (
    <html lang="en">
      <body>
        <Provider>
          <ThemeProvider>
            <AppLayout>
              {children}

              <ToastContainer />
            </AppLayout>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
