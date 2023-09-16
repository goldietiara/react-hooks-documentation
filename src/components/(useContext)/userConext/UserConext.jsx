import React, { useContext } from "react";
import { appContext } from "@/app/(reactHooks)/exUseContext/page";

const UserConext = () => {
  const { username } = useContext(appContext);

  return (
    <div>
      <p className="text-sm text-white/30">child-1 component:</p>
      <div className="w-full h-full py-3 px-5">username: {username}</div>
    </div>
  );
};

export default UserConext;
