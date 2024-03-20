import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import List from './Components/List';

type Post = {
  body: string,
  id: number,
  title: string,
  userId: number,
};
interface State{
  loading: boolean;
  posts: null | Post[];
  error: null | string
}
const initialState: State = {
  loading: false,
  posts: null,
  error: null,
}

function App() {
  const [data, setData] = useState<State>(initialState);
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const changeStatus = () => (posts: Post[] | null, loading: boolean, error: null | string) : void => {
    setData({
      posts,
      loading,
      error,
    })
  }
  const loadingStartStatus = changeStatus();
  const loadingSuccecStatus = changeStatus();
  const loadingFailed = changeStatus();
  useEffect(() => {
    loadingStartStatus(null, true, null);
    fetch(url)
      .then(resp => resp.json ())
      .then(posts => {
        setTimeout(() => {
          loadingSuccecStatus(posts, false, null);
        } , 15000);
        
      })
      .catch(err => {
        loadingFailed(null, false, "Error");
      })
  }, [])
  const {loading, posts, error} = data;
  return (
    <div className={styles.app}>
      {loading && <div className={styles.loading}>Loading....</div>}
      {error && <div className={styles.error}>Возникла ошибка</div> }
      {posts && <List posts={posts}/>}
      {(!error && !loading && !posts) ? "Пустой" : ""}
    </div>
  );
}

export default App;
