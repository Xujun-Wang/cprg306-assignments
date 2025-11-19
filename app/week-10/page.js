"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List App</h1>
      
      {user ? (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="space-x-4">
            <Link
              href="/week-10/shopping-list"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4">Please sign in to access your shopping list.</p>
          <button
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}