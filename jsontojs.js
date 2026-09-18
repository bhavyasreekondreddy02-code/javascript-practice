let text = `{
  "books": [
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "year": 1988
    },
    {
      "title": "Atomic Habits",
      "author": "James Clear",
      "year": 2018
    },
    {
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "year": 2008
    }
  ]
}`;

let obj = JSON.parse(text);
console.log(obj.books[1].title); // Output: Atomic Habits
