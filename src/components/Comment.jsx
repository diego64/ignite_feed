import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  };

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  };

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

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}