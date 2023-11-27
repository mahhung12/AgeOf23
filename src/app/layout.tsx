import AppLayout from "@/components/Layout";
import Provider from "@/components/SessionProvider/Provider";

import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/provider/theme-provider";
import "@/styles/_app.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/_app.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://age-of-23.vercel.app/"),
  title: {
    default: "Age of 23",
    template: `%s | Age of 23`,
  },
  description: "Things of Age 23",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
