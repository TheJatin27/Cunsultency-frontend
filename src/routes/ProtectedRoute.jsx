import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Loader2 } from "lucide-react";

const ProtectedRoute = () => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthState(false);
        return;
      }

      try {
        // Refresh user data
        await user.reload();

        if (!user.emailVerified) {
          await signOut(auth);
          setAuthState(false);
          return;
        }

        setAuthState(true);
      } catch (error) {
        console.error(error);
        setAuthState(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (authState === null) {
    return (
      <div className="min-h-screen bg-[#f7ede2] flex flex-col items-center justify-center gap-3">
        <Loader2 className="animate-spin text-[#e9967a]" size={32} />
        <span className="text-xs font-black uppercase tracking-widest text-[#1f1916]/60">
          Syncing Security Vault...
        </span>
      </div>
    );
  }

  return authState ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;