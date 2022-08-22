import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jerry Augusto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero inventore nam dolores aspernatur amet odio adipisci accusantium debitis asperiores! Minima odio, nesciunt dignissimos necessitatibus accusantium impedit delectus eaque perspiciatis?"
          />
          <Post
            author="Gabriel Araujo"
            content="Um novo post muito legal."
          />
        </main>
      </div>
    </>
  );
}
