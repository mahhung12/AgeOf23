// import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout(props: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  // const loginSegments = useSelectedLayoutSegment();

  return (
    <div>
      <div>{props.children}</div>
      <div className="mt-5">
        {props.left}
        {props.right}
      </div>
    </div>
  );
}
