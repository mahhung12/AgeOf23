export default function Layout(props: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap">
      {props.left}
      {props.right}
    </div>
  );
}
