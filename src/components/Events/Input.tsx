type InputType = {
  value: string;
  handleChnage: (event: React.ChangeEvent) => void;
};

export const Input = ({ value, handleChnage }: InputType) => {
  return <input type="text" value={value} onChange={handleChnage} />;
};
