import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound(){
    return  <div className={styles.not_found}>
                404 NOT FOUND
                <div>
                    <Link to="/">Вернуться на главную страницу</Link>
                </div>
                
            </div>
}