"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function OwnerSessionLock() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        signOut({ callbackUrl: "/owner/login" });
      }, 15 * 60 * 1000);
    };

    const events = ["mousedown", "keydown", "touchstart", "scroll"];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);

  return null;
}
