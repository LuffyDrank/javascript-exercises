const getTheTitles = function(books) {
    let myArray = books;
    let result = []
    for(let i = 0; i < myArray.length; i++) {
       result.push(myArray[i].title);
    }
    return result;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
