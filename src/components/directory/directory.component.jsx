import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => (
  <div className="categories-container">
    {categories.map(({ id, ...otherSectionProps }) => (
      <CategoryItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
