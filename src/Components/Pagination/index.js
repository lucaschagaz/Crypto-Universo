import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ PerPage, list, setCurrencyPage }) => {

  const pages = Math.ceil(list / PerPage)

  function onPageChange(page) {
    setCurrencyPage(page);
  }
  
  return (
    <div className={styles.Pagination}>
        {Array.from(Array(pages), (items, idx) => (
            <button value={idx} onClick={() => onPageChange(idx)} className={styles.pagination_Button}>
              {idx + 1}
            </button>
          ))
        }
    </div>
  )
};

export default Pagination;
