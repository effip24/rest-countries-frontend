import React, { ReactHTMLElement, useState } from "react";
import "./Filter.css";

interface Props {
  filters: string[];
  onFilter: Function;
  onRemoveFilter: Function;
}

const Filter = ({ filters, onFilter, onRemoveFilter }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setIsHovering(!isHovering);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(!isHovering);
  };

  const handleFilterClick = (e: React.MouseEvent<HTMLElement>): void => {
    onFilter(e.currentTarget.textContent);
  };

  const handleRemoveFilter = (e: React.MouseEvent<HTMLElement>): void => {
    onRemoveFilter(e.currentTarget.textContent);
  };

  return (
    <div className="filter">
      <div className="filter__filters-container">
        <ul className="filter__list">
          {filters.map((filter, id) => (
            <li className="filter__item" key={id} onClick={handleRemoveFilter}>
              <p className="filter__type">{filter}</p>
              <i className="filter__remove"></i>
            </li>
          ))}
        </ul>

        <div className="filter__title-wrap" onMouseEnter={handleMouseEnter}>
          <p className="filter__title">Filter by Region</p>
          <i className="filter__icon"></i>
        </div>
      </div>

      <ul
        className="filter__container"
        style={{ display: `${isHovering ? "flex" : ""}` }}
        onMouseLeave={handleMouseLeave}
      >
        <li className="filter__type" onClick={handleFilterClick}>
          Africa
        </li>
        <li className="filter__type" onClick={handleFilterClick}>
          Americas
        </li>
        <li className="filter__type" onClick={handleFilterClick}>
          Asia
        </li>
        <li className="filter__type" onClick={handleFilterClick}>
          Europe
        </li>
        <li className="filter__type" onClick={handleFilterClick}>
          Oceania
        </li>
      </ul>
    </div>
  );
};
export default Filter;
