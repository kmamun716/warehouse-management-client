import React, { useEffect, useState } from "react";
import VegitableItems from "../../components/Home/VegitableItems";

const Products = () => {
  const [veg, setVeg] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(6);
  useEffect(() => {
    fetch("https://warm-meadow-82274.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 6);
        setPageCount(pages);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://warm-meadow-82274.herokuapp.com/paginateItem?itemPerPage=${itemPerPage}&pageNumber=${page}&searchQuery=false`
    )
      .then((res) => res.json())
      .then((result) => setVeg(result));
  }, [itemPerPage, page]);
  return (
    <div>
      <VegitableItems vegetables={veg} />
      <div className="d-flex justify-content-center mt-2">
        <nav aria-label="...">
          <ul className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <li
                key={number}
                className={
                  page === number ? "active page-item mx-1" : "page-item mx-2"
                }
                onClick={() => setPage(number)}
              >
                <span className="page-link" style={{ cursor: "pointer" }}>
                  {number + 1}
                </span>
              </li>
            ))}
            <select
              defaultValue={6}
              onChange={(e) => setItemPerPage(e.target.value)}
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;
