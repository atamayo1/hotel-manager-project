export const saveStorage = (keyname, element) => {
  let elements = JSON.parse(localStorage.getItem(keyname));

  if (Array.isArray(elements)) {
    elements.push(element);
  } else {
    elements = [element];
  }

  localStorage.setItem(keyname, JSON.stringify(elements));
  return element;
};
