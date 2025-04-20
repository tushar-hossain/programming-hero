import toast from "react-hot-toast";

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

export const addFavorites = (phones) => {
  const favorites = getFavorites();
  const isExist = favorites.find((phone) => phone.id === phones.id);
  if (isExist) return toast.error("Already Exists");
  favorites.push(phones);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  toast.success("Successfully added Favorite");
};

export const removeFavorites = (id) => {
  const favorites = getFavorites();
  const remainingFavorites = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
  toast.error("Favorite Remove Successful");
};

// cart
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

export const addToCart = (phones) => {
  const cart = getCart();
  const isExist = cart.find((phone) => phone.id === phones.id);
  if (isExist) return toast.error("Already Exists");
  cart.push(phones);
  localStorage.setItem("cart", JSON.stringify(cart));

  toast.success("Successfully added Cart");
};

export const removeCart = (id) => {
  const cart = getCart();
  const remainingCart = cart.filter((phone) => phone.id !== id);

  localStorage.setItem("cart", JSON.stringify(remainingCart));
  toast.error("Cart Remove Successful");
};
