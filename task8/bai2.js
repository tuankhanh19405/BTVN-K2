// Input:
const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];




function flattenCategories(arr, parentId = 0) {
  let result = [];

  for (const item of arr) {
    const { id, name } = item;
    result.push({ id, name, parentId });

    if (item.children && item.children.length > 0) {
      result = result.concat(flattenCategories(item.children, id));
    }
  }

  return result;
}
console.log(flattenCategories(categories));

// // Output:
// [
//   { id: 1, name: "Electronics", parentId: 0 },
//   { id: 2, name: "Laptops", parentId: 1 },
//   { id: 3, name: "Apple", parentId: 2 },
//   { id: 4, name: "Dell", parentId: 2 },
//   { id: 5, name: "Headphones", parentId: 1 },
//   { id: 6, name: "Books", parentId: 0 },
//   { id: 7, name: "Fiction", parentId: 6 },
//   { id: 8, name: "Thrillers", parentId: 7 },
//   { id: 9, name: "Mystery", parentId: 7 },
//   { id: 10, name: "Non-Fiction", parentId: 6 },
// ];