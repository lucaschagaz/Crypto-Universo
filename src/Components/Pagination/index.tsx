import React from "react";

import styles from "./Pagination.module.css";

type PaginationProps = {
  PerPage:number
  list:number 
  setCurrencyPage:(page: number) => void
}

const Pagination = ({ PerPage, list, setCurrencyPage }: PaginationProps) => {

  const pages = Math.ceil(list / PerPage)

  function onPageChange(page:number) {
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
