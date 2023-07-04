"use client";

import AppModal from "@/components/Modal";
import { useState } from "react";

export default function SignIn() {
  const [visibleSignIn, setVisibleSignIn] = useState(false);

  const handleCloseModal = () => setVisibleSignIn(false);

  return (
    <AppModal title="login" visible={visibleSignIn} onClose={handleCloseModal}>
      Sign In
    </AppModal>
  );
}
