type a = {
  name: string;
  age: number;
};

const Taskb = (props: a) => {
  return (
    <div>
      <h1 className="font-bold text-lg">Task B</h1>
      <p>Hello My name is {props.name}</p>
      <p>My age is {props.age}</p>
    </div>
  );
};

export default Taskb;
