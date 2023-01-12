import React from "react";
import { Greet } from "../Greet";

export const ExtractComponent = (props: React.ComponentProps<typeof Greet>) => {
  // React.ComponentProps<typeof Greet>, helps you to extreact other component props like the below one, we use props.name on the Greet component but now we can also use the props.name here, because we extraxted the Greet component
  return <div>{props.name}</div>;
};
