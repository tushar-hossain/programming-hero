const getLocalStorageItem = () => {
  const getBook = localStorage.getItem("readList");
  if (getBook) {
    const bookList = JSON.parse(getBook);
    return bookList;
  }
  return [];
};

const setLocalStorageItem = (id) => {
  const getBook = getLocalStorageItem();
  if (getBook.includes(id)) {
    alert("Already exits Book");
  } else {
    getBook.push(id);
    const setBook = JSON.stringify(getBook);
    localStorage.setItem("readList", setBook);
  }
};

export { setLocalStorageItem, getLocalStorageItem };
