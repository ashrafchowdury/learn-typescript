import Counter from "./components/class/Counter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Button } from "./components/Events/Button";
import { Input } from "./components/Events/Input";
import { Greet } from "./components/Greet";
import { Component } from "./components/Heading/Component";
import { Heading } from "./components/Heading/Heading";
import { LodggedIn } from "./components/hooks/LodggedIn";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Ashraf",
    last: "Chowdury",
  };
  const nameList = [
    {
      first: "Ashraf",
      last: "Chowdury",
    },
    {
      first: "Sahil",
      last: "Chowdury",
    },
  ];
  return (
    <div className="App">
      <Greet name="Ashraf" count={10} auth={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Ashraf</Heading>
      <Component>
        <Heading>Component Data</Heading>
      </Component>
      <Button handleClick={(event, id) => console.log("button", event, id)} />
      <Input value="" handleChnage={(event) => console.log(event)} />
      <Container styles={{ color: "red", fontSize: "48px" }} />
      <LodggedIn />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Counter message='Ashraf' />
    </div>
  );
}

export default App;
