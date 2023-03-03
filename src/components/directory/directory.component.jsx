import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => (
  <div className="categories-container">
    {categories.map(({ id, ...otherSectionProps }) => (
      <DirectoryItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
