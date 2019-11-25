import data from "./data.json";
type Data = {
  a: string;
  array: {
    hoge: number;
  }[];
};

const d1: Data = data;
const d2: Data = data; // type check error ocurred

const copiedData = data;
const d3 = copiedData; // type check error didn't occur

const data2 = {
  a: "b",
  c: "d",
  array: [{ hoge: 1 }, { hoge: 2, foo: "bar" }]
};

const d4: Data = data2;
const d5: Data = data2; // type check error didn't occur
