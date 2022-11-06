import axios from "axios";

const getCategories = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((result) => {
        const categories = result.data;
        resolve(categories);
      })
      .catch(reject);
  });

export { getCategories };
