import _ from "lodash";
const Taskd = () => {
  console.log(_);

  const numbers = [1, 2, 3, 4, 5];
  console.log(_.first(numbers));
  console.log(_.last(numbers));
  console.log(_.nth(numbers, 3));

  return <div></div>;
};

export default Taskd;
