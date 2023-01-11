import { useState } from "react";
type AuthType = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setuser] = useState<AuthType | null>(null); // <AuthType | null> means the useState value either be null or AuthType
  //use this method if the value fillup as soon as loading the page
  // const [user, setuser] = useState<AuthType>({} as AuthType); // as means assertion. {} as AuthType means the empty object is of type AuthType user

  const handleLogIn = () => {
    setuser({
      name: "Ashraf",
      email: "ashraf@gmail.com",
    });
  };
  const handleLogOut = () => setuser(null);
  return (
    <>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User name is: {user?.name}</div>
      <div>User email is: {user?.email}</div>
    </>
  );
};
