const isEmpty = (objectToCheck = {}) => {
  return Object.keys(objectToCheck).length === 0 && objectToCheck.constructor === Object;
};

export {
  isEmpty
};