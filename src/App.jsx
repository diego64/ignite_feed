import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego64.png',
      name: 'Diego Ferreira L.G.Oliveira',
      role: 'Developer JR (JS) @ESPN'
    },
    content: [
      { type: 'paragraph', content: 'Fala comigo blz ?👋' },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz para a NLW Return, evento da Rocketseat (Uma escola de programação). O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: 'diego.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-16 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/AlexSouzaSilvax.png',
      name: 'Alex Silva',
      role: 'Developer Java JR @Cognizant'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia tudo bem ?👋' },
      { type: 'paragraph', content: "Resolvi um BUG no sistema onde trabalhado usando JAVA e JS (em um micro serviço de autenticação e validação de cadastro)"},
      { type: 'link', content: 'diego.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-16 10:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
    </div>
  )
}