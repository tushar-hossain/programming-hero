/**
 * Get Item local storage
 */

const getLocalStorage = () => {
  const getCartItems = localStorage.getItem("cart");
  if (getCartItems) {
    const getCart = JSON.parse(getCartItems);
    return getCart;
  }
  return [];
};

/**
 * Add Item local storage
 */

const saveCartLS = (cart) => {
  const storedCart = JSON.stringify(cart);
  localStorage.setItem("cart", storedCart);
};

const addLocalStorage = (id) => {
  const cart = getLocalStorage();
  const newCart = [...cart, id];
  saveCartLS(newCart);
};

/**
 * Remove from local storage
 */

const removeCart = (id) => {
  const remainingCartId = getLocalStorage();
  const remainingCart = remainingCartId.filter((cartId) => cartId !== id);
  saveCartLS(remainingCart);
};

export { getLocalStorage, addLocalStorage, removeCart };
