"use client";
import { signIn, signOut, useSession } from "next-auth/react";

function LoginPage() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <button onClick={() => signIn("instagram")}>
          Login with Instagram
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign out
        </button>
      )}
    </div>
  );
}

export default LoginPage;
