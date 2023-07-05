"use client";

import IntroductionPage from "@/components/pages/docs/introduction";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <IntroductionPage />

      {props.children}
    </div>
  );
}
