import React, { useState } from "react";
import "./ProductImages.scss";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  return (
    <section className="product-images">
      <img src={mainImage.url} alt="main Image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMainImage(images[index])}
              className={`${image.url === mainImage.url ? "active" : ""}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
