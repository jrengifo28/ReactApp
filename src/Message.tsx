// function Message() {
//     const name = "Jhona";
//     if (name)
//         return <h1>Hello {name}</h1>;
//         return <h1>Hello World</h1>;
// }

let count = 0;

const Message = () => {
  count++;
  return <div>Message {count} </div>;
};

export default Message;
