export const LoopBash = (n) => {
  for (let i = 1; i <= n; i++) {
    if (ConditionBash(i)) {
      console.log("Number : ", i, " - ", ConditionBash(i));
    }
  }
};

export const ConditionBash = (number) => {
  let text = "";
  if (number % 15 === 0) {
    text = "fish bash";
  } else if (number % 3 === 0) {
    text = "fish";
  } else if (number % 5 === 0) {
    text = "bash";
  }
  return text;
};
