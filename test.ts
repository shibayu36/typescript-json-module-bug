import data from "./data.json";
type Data = {
  a: string;
  array: {
    hoge: number;
  }[];
};
const foo: Data = data;
const bar: Data = data;

// const data = {
//   a: "b",
//   c: "d",
//   array: [{ hoge: 1 }, { hoge: 2, foo: "bar" }]
// };

// const foo: B = data;
// const bar: B = data;
