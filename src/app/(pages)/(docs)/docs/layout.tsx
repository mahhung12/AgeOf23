import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
  description: "Introduction to People in their 23s",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
