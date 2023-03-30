export const selectCategoriesMap = (state) => {
  console.log("selectCategoriesMap fired");
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
