import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = {
    title: "Company",
    description: "working companies",
    alternates: {
      canonicals: `/company/${params?.slug}`,
    },
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
  return (
    <main>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
