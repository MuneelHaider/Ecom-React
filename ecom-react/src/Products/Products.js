import "./Products.css";
import { IoBagCheck } from "react-icons/io5";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-tile">Shoe</h3>
            <section className="card-reviews">
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>3000 PKR</del> 2000 PKR
              </div>
              <div className="bag">
                <IoBagCheck className="bag-icon"/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
