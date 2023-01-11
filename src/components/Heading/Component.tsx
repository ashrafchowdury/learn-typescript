type ComponentType = {
  children: React.ReactNode; // React.ReactNode means we pass a react component
};

export const Component = (props: ComponentType) => {
  return <div>{props.children}</div>;
};
