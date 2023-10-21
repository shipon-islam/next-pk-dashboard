export const textControler = (text) => {
  return text.split(" ").slice(0, -1).join(" ").toLowerCase();
};
export const colorSelector = (category) => {
  if (category.toLowerCase() === "ongoing tasks") {
    return "text-purple-cs";
  } else if (category.toLowerCase() === "completed tasks") {
    return "text-success";
  } else if (category.toLowerCase() === "upcoming tasks") {
    return "text-warning";
  } else if (category.toLowerCase() === "feature tasks") {
    return "text-purple-500";
  } else {
    return "text-primary";
  }
};
