import AppModal from "@/components/Modal";

export default async function Layout(props: {
  // ...
  authModal: React.ReactNode;
}) {
  return (
    <>
      {/* ... */}
      <AppModal>{props.authModal}</AppModal>
    </>
  );
}
