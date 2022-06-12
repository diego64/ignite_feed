import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego64.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Ferreira L.G.Oliveira</strong>
            <span>Developer JR (JS)</span>
          </div>
        </div>

        <time title="04 de Junho às 19:12h" dataTime="2022-06-04 19:12:25">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala comigo blz ?👋</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz para a NLW Return, evento da Rocketseat (Uma escola de programação). O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">diego.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
          <a href="">#uiux</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}