import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogIn = () => {
    if (userContext) {
      userContext.setuser({
        name: "Ashraf",
        email: "ashraf@gmail.com",
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setuser(null);
    }
  };
  return (
    <>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User name is: {userContext?.user?.name}</div>
      <div>User email is: {userContext?.user?.email}</div>
    </>
  );
};
