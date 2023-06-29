export default function Layout(props: {
  children: React.ReactNode;
  left: React.ReactNode;
}) {
  console.log("left :>> ", props.left);
  return (
    <div>
      {props.children}
      {/* {props.right} */}
      123123
    </div>
  );
}
