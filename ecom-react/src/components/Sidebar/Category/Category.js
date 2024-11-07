import "./Category.css";

function Category() {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="cat1" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="cat1" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="cat1" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="cat1" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </>
  );
}

export default Category;