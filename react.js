import Header from './Header';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [hora, setHora] = useState(5);
  const [minuto, setMinuto] = useState(30);
  const [segundo, setSegundo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(prev => {
        if (prev + 1 === 60) {
          setMinuto(m => {
            if (m + 1 === 60) {
              setHora(h => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{hora}:{minuto}:{segundo}</h2>
    </div>
  );
}
