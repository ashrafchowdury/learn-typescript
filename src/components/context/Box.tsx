import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className=" text-2xl" style={{ color: theme.primary }}>
      Box
    </div>
  );
};
