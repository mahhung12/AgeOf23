import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center justify-center gap-2 -mt-16">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
