type HeaderType = {
  children: string;
};
export const Heading = (props: HeaderType) => {
  return <div>{props.children}</div>;
};
