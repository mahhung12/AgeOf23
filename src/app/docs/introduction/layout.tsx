"use client";

import IntroductionPage from "@/components/pages/docs/introduction";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="mt-5 pt-8">
      <IntroductionPage />

      {props.children}
    </div>
  );
}
