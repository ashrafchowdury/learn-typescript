type ListType = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: ListType) => {
  return (
    <div>
      {props.names.map((name) => {
        return <p key={name.first}>{name.first}</p>;
      })}
    </div>
  );
};
