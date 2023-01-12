type TextOwnType<E extends React.ElementType> = {
  // E meams React.ElementType
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextType<E extends React.ElementType> = TextOwnType<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnType<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextType<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
