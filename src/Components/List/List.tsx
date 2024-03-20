import  React, {useState}  from "react";
import styles from "./List.module.css";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

type Post = {
    body: string,
    id: number,
    title: string,
    userId: number,
};
type Props = {
    posts: Post[];
}
export default function List(props: Props){
    const {posts} = props;
    const countPages = Math.ceil(posts.length / 10);
    const [currentPage, setCurrentPage] = useState<number>(0);
    function renderList(posts: Post[], offset: number): JSX.Element {
        return <ul className={styles.list_items}>
                    {posts.map(({id, title}, index) => {
                        return  <li key={id} className={styles.list_item}>
                                    {index + 1 + offset}. {title} <Link to={`/${index + 1 + offset}`}> Просмотреть пост</Link>
                                </li>
                    })}
                </ul>;
    }
    return  <div className={styles.list}>
                {renderList(posts.slice(currentPage*10, currentPage*10 + 10), currentPage*10)}
                <Pagination 
                            countPages={countPages} 
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            />
            </div>
}