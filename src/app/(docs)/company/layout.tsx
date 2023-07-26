import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = {
    title: "Company",
    description: "working companies",
    bool: true,
  };

  if (!post.bool)
    return {
      title: "Not Found",
      description: "companies is not found",
    };

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
