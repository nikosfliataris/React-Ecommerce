import React from "react";
import "./Filters.scss";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    UpdateFilters,
    ClearFilters,
    filters: {
      text,
      company,
      category,
      colors,
      min_price,
      max_price,
      price,
      shipping,
    },
    all_Products,
  } = useFilterContext();
  const Categories = getUniqueValues(all_Products, "category");
  const Company = getUniqueValues(all_Products, "company");
  const Colors = getUniqueValues(all_Products, "colors");

  return (
    <section className="filters">
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={UpdateFilters}
            />
            <div className="form-control">
              <h5>Categories</h5>
              <div>
                {Categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={UpdateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category.toLowerCase() === cat.toLowerCase()
                        ? "active"
                        : null
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="form-control"></div>
          <h5>Companies</h5>
          <select
            name="company"
            value={company}
            onChange={UpdateFilters}
            className="company"
          >
            {Company.map((com, i) => (
              <option key={i} value={com}>
                {com.toUpperCase()}
              </option>
            ))}
          </select>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {Colors.map((c, i) => {
                if (c === "all") {
                  return (
                    <button
                      key={i}
                      name="colors"
                      style={{ background: c }}
                      className={`${
                        colors === "all" ? "all-btn active" : "all-btn"
                      }`}
                      data-color="all"
                      onClick={UpdateFilters}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={i}
                    name="colors"
                    style={{ background: c }}
                    className={`${
                      colors === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={UpdateFilters}
                  >
                    {colors === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={UpdateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={UpdateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={ClearFilters}>
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
