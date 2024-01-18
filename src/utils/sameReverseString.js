export const SameReverseString = (str = "") => {
  const text = str.trim().toLowerCase();

  let isSame = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[text.length - i - 1]) {
      isSame = true;
    } else {
      isSame = false;
    }
  }
  console.log("text : ", text, " - ", isSame);
  return isSame;
};
