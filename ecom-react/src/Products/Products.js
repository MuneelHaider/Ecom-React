import "./Products.css";
import data from "../DB/data";
import { IoBagCheck } from "react-icons/io5";

function Products() {
  return (
    <section className="card-container">
      {data.map((product, index) => (
        <section className="card" key={index}>
          <img src={product.img} alt={product.title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>
            <section className="card-reviews">
              <span>{product.star}</span>
              <span className="total-reviews">{product.reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{product.prevPrice}</del> {product.newPrice} PKR
              </div>
              <div className="bag">
                <IoBagCheck className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Products;
