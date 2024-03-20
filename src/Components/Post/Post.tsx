import React from "react";
import styles from "./Post.module.css";
import { useParams, Link } from "react-router-dom";

export default function Post(){
    const {postId} = useParams<{postId: string}>();
    if((postId as unknown as number) > 100){
        return <div>Такого поста нет</div>;
    }
    return  <div className={styles.post}>
                Здесь будет какой-то пост под номером {postId}
                <div className={styles.post_back}>Вернуться назад <Link to={"/"}>Назад</Link></div>
            </div>
}