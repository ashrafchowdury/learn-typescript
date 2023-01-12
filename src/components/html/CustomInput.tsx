type CustomInputype = React.ComponentProps<"input">; //React.ComponentProps helps us to add HTML elements

export const CustomInput = ({
  ...rest //...rest means all the rest of other attributes
}: CustomInputype) => {
  return <input type="text" {...rest} />;
};
