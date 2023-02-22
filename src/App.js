const App = () => {
  const categories = [
    {
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, imageUrl, id, linkUrl }) => (
        <div key={id} className="category-container">
          <img alt={title} src={imageUrl} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
