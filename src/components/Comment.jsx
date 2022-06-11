import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/AlexSouzaSilvax.png" alt="" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Alex Silva</strong>
                <time title="04 de Junho às 19:12h" dataTime="2022-06-04 19:12:25">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>Muito Top Irmão, Sucesso! 👋👋👋</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}