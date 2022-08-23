import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/jerryaugusto.png" />
          <div className={styles.authorInfo}>
            <strong>Jerry Augusto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='23 de agosto às 15:30h' dateTime='2022-08-23 15:30:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉&nbsp;
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>&nbsp;
        </p>
      </div>
    </article>
  );
}