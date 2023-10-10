import { Header } from '../components/header';
import { GameTittle, GameField, GameInfo } from '../components/game';
export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTittle />
        <GameInfo className="mt-4 mb-6" />
        <GameField />
      </main>
    </div>
  );
}
