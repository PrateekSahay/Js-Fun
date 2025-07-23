// given an array of names in format "firstname lastname". sort the array by last name in ascending order. how to do this
const arr = ["Mary Smith","Prateek Sahay", "John Doe"]

arr.sort((a, b) =>
    a.split(" ").at(-1).localeCompare(b.split(" ").at(-1))
);
  