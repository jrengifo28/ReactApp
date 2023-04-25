import { useState } from "react";

// import produce from "immer";

// import Message from "./Message";
//import ListGroup from "./components/ListGroup/ListGroup";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

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

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const [tags, setTags] = useState(["happy", "cheerful"]);
  // const handleClick = () => {
  //   //Add
  //   setTags([...tags, "exciting"]);
  //   //Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));
  //   //Update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };

  // const handleClick = () => {
  //   // setDrink({ ...drink, price: 6 });
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 94112 },
  //   });
  // };

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const handleClick = () => {
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>

  // {bugs.map((bug) => (
  //   <p key={bug.id}>
  //     {bug.title} {bug.fixed ? "Fixed" : "New"}
  //   </p>
  // ))}

  // <button onClick={handleClick}>Click Me</button>

  return (
    <div>
      <NavBar carItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
