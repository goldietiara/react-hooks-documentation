import React, { useContext } from "react";
import { appContext } from "@/app/(reactHooks)/exUseContext/page";

const UserConext = () => {
  const { username } = useContext(appContext);

  return (
    <div className="w-full h-full py-3 px-5 bg-pink-50">
      username: {username}
    </div>
  );
};

export default UserConext;
