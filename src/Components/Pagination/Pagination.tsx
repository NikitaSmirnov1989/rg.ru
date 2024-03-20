import React, { SetStateAction } from "react";
import styles from "./Pagination.module.css";
type Props = {
    countPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>
}
export default function Pagination(props: Props){
    const {countPages, currentPage, setCurrentPage} = props;
    function renderPagination(n: number): JSX.Element{
        return  <ul className={styles.pagination_items}>
                    {Array(n).fill(0).map((v, i) => {
                        return <li 
                                    style={{"background": currentPage === i ? "orange" : "none"}}
                                    className={styles.pagination_item}
                                    onClick={() => setCurrentPage(i)} 
                                    key={i}>
                                        {i + 1}
                                    </li>
                    })}
                </ul>
    }
    return  <div className={styles.pagination}>
                {renderPagination(countPages)}
            </div>
};