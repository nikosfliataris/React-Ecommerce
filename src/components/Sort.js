import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import "./Sort.scss";
const Sort = () => {
  const {
    grid_view,
    filtered_Products,
    SetGridView,
    SetListView,
    sort_list_Products,
    UpdateSort,
  } = useFilterContext();

  return (
    <section className="sort">
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={SetGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={SetListView}
        >
          <BsList />
        </button>
      </div>
      <p>{filtered_Products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort_list_Products}
          onChange={UpdateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (A-Z)</option>
          <option value="name-z">name (Z-A)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
