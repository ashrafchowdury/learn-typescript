import { useState } from "react";

export const LodggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogIn = () => setisLoggedIn(true);
  const handleLogOut = () => setisLoggedIn(false);
  return (
    <>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User : {isLoggedIn ? "User Active" : "User Deactive"}</div>
    </>
  );
};
