import AppLayout from "@/components/Layout";
import { Inter } from "next/font/google";
import "../styles/_app.scss";

// import { CaveatFont } from "@/styles/fonts";
import Provider from "../components/SessionProvider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Age Of 23",
  description: "Things of Age 23",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <AppLayout>{children}</AppLayout>
        </Provider>
      </body>
    </html>
  );
}
