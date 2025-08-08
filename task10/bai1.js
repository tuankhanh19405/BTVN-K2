// Input:
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((obj, item) => {
    const [key, value] = item.split(":");
    obj[key] = value;
    return obj;
  }, {});
}


// Output:
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' 