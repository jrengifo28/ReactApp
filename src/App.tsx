//import ListGroup from "./components/ListGroup/ListGroup";
import { useState } from "react";
// import Message from "./Message";

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

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    // setDrink({ ...drink, price: 6 });
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  //return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
