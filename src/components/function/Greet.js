// creating a functional component

function Greet(props) {
  const { name, children } = props;
  return (
    <>
      <h1>I'm {name}</h1>
      {children}
    </>
  );
}

// use arrow functions to define functional components
export const Greet2 = () => <h1>I'm Superman</h1>;
// default export - can be imported with any name of the choice at the consumer
export default Greet;
