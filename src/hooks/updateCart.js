// CUSTOM HOOK
// Adds, updates and delete item(s) from the cart
import React from "react";

const UpdateCart = () => {
  let [cart, setCart] = React.useState([]);

  let localCart;

  if (typeof window !== "undefined") {
    localCart = localStorage.getItem("cart");
  }

  React.useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];

    let { id, title, thumbnail, price, discountPercentage } = item;

    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      existingItem.quantity += 1; // update item if it exists
    } else {
      // if item doesn't exist, simply add it
      cartCopy.push({
        id,
        title,
        thumbnail,
        price,
        discountPercentage,
        quantity: 1
      });
    }

    //update app state
    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const updateItem = (itemID, option) => {
    let cartCopy = [...cart];

    let existentItem = cartCopy.find((item) => item.id === itemID);

    // if it doesnt exist simply return
    if (!existentItem) return;

    // continue and update quantity
    existentItem.quantity += option;

    // validate result
    if (existentItem.quantity <= 0) {
      // remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item.id !== itemID);
    }

    // again, update state and localState
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const removeItem = (itemID) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.id !== itemID);

    //update state and local
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  return {
    cart,
    setCart,
    addItem,
    updateItem,
    removeItem
  };
};

export default UpdateCart;
