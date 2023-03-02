import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h1>{title}</h1>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
      <div className="products-container">
        {/* {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}
      </div>
    </>
  );
};

export default Shop;
