"use client";

import AppModal from "@/components/Modal";
import { useState } from "react";

export default function SignUp() {
  const [visibleSignUp, setVisibleSignUp] = useState(false);

  const handleCloseModal = () => setVisibleSignUp(false);

  return (
    <AppModal title="login" visible={visibleSignUp} onClose={handleCloseModal}>
      Sign Up
    </AppModal>
  );
}
