export default function Layout(props: {
  children: React.ReactNode;
  left: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      {/* {props.right} */}
      123123
    </div>
  );
}
