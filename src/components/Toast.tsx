type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type ToastType = {
  // Exclude<> keyword is use for adding new value on an existing type
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastType) => {
  return <div>Toast Position - {position}</div>;
};
