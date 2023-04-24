//import ListGroup from "./components/ListGroup/ListGroup";
// import { useState } from "react";
import Message from "./Message";

function App() {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const [isVisible, setVisibility] = useState(false);
  // const [isApproved, setApproved] = useState(true);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });
  // const [isLoading, setLoading] = useState(false);

  // const fullName = firstName + ' ' + lastName

  /*const handleSelectItem = (item: string) => {
    console.log(item);
  }
  */

  // const handleClick = () => {
  //   setVisibility(true);
  //   console.log(isVisible);
  // };

  //return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  return (
    <div>
      <Message />
    </div>
  );
}

export default App;
