import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { RickAndMortyAPI } from '../services/API';
import { useState } from 'react';


interface Character {
  id: number;
  name: string;
  image: string;
}

export default function Home() {
  const [characterState, setCharacterState] = useState<Character | null>({
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  });

  function loadRandomCharacterState(): void {
    const characterId = (characterState?.id === 1) ? 2 : 1;

    const loadCharacter = async () => {
      const response = await RickAndMortyAPI.get<Character>(`/character/${characterId}`);
      return response.data;
    }

    loadCharacter().then((loadedCharacter) => setCharacterState(loadedCharacter));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty demo</title>
        <meta name="description" content="Rick and Morty App demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{characterState?.name}</h1>

        <img className={styles['character-image']} src={characterState?.image} alt={characterState?.name} />

        <button
          className={styles['toggle-character']}
          onClick={loadRandomCharacterState}
        >Mudar personagem</button>
      </main>
    </div>
  )
}
