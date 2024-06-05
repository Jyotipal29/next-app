"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export const Appbar = () => {
  const session = useSession();
  return (
    <div className="bg-blue-600">
      <div className="p-4 text-white flex justify-between max-w-[800px] mx-auto">
        <p>Grapevine</p>
        <button onClick={() => signIn()}>login</button>
        <button onClick={() => signOut()}>logout</button>
        {JSON.stringify(session)}
      </div>
    </div>
  );
};
