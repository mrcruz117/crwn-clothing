import { useContext } from "react";
import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const {} = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}
    </div>
  );
};

export default Shop;
