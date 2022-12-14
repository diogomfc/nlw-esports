import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBannser';

import logoImg from './assets/LogoNlwEsports.svg';
import './styles/main.css';

import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';

import { CreateAdModal } from './components/CreateAdModal';

interface Game {
  id: number;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}



function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  },
    [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-Gradient bg-clip-text"> duo </span>está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">

        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}

      </div>

      <Dialog.Root>

        <CreateAdBanner />

        <CreateAdModal />

      </Dialog.Root>

    </div>
  )
}

export default App
