import "./Price.css";

function Price() {
  return (
    <>
      <div className="pricing"></div>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="cat2" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="cat2" />
        <span className="checkmark"></span>$0 - 50
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="cat2" />
        <span className="checkmark"></span>$50 - 100
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="cat2" />
        <span className="checkmark"></span>$100 - 150
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="cat2" />
        <span className="checkmark"></span>Over $150
      </label>
    </>
  );
}

export default Price;
