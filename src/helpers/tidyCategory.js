// HELPER FUNCTION
// Removes '-' and capitalises all the words in the string category
const tidyUpCateogry = (category) =>
  category
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(?: |\b)(\w)/g, function (key, p1) {
      return key.toUpperCase();
    });

export default tidyUpCateogry;
