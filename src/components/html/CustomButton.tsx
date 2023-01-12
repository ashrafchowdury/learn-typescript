type CustomButtonType = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">; //React.ComponentProps helps us to add HTML elements

// Omit<React.ComponentProps<"button">, 'children'> // Omit, keyword leave out the children element from the button
export const CustomButton = ({
  variant,
  children,
  ...rest //...rest means all the rest of other attributes
}: CustomButtonType) => {
  return <button {...rest}>{children}</button>;
};
