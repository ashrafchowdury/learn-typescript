type StatusType = {
  status: "loading" | "success" | "error"; //Union Type
};

export const Status = (props: StatusType) => {
  let msg;
  if (props.status == "loading") {
    msg = "Leading...";
  } else if (props.status == "success") {
    msg = "Get data successfully";
  } else if (props.status == "error") {
    msg = "Error fetching data";
  }
  return (
    <>
      <h2>Status : {msg}</h2>
    </>
  );
};
