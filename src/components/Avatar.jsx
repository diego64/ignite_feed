import { TextStrikethrough } from 'phosphor-react';
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = TextStrikethrough, src}) {
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
    />
  );
}