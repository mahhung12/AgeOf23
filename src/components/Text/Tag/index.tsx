import React from "react";

export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-full border px-1.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground m-0 p-0">
      {text}
    </div>
  );
};
