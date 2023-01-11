type GreetType = {
  name: string;
  count?: number; // ? mark says that, this property is optional
  auth: boolean;
};

export const Greet = (props: GreetType) => {
  const { count = 0 } = props; //IF we dont pass the count value then the count value is equal to 0
  return (
    <div>
      Welcome {props.name} {props.count}
    </div>
  );
};
