import './Main.css';
import { zodiacs } from '../../data.js';

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <p className={zodiac.name} key={zodiac.id}>
          {zodiac.name}
        </p>
      ))}
    </main>
  );
}
