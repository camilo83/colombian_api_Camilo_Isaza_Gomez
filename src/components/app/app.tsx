import { useEffect } from 'react';
import { useAirport } from '../../hooks/useAirport/useAirport';

export default function App() {
  const { loadAirports } = useAirport();

  useEffect(() => {
    console.log('hola');
    const fetchAirports = async () => {
      const airports = await loadAirports();
      console.log(airports);
    };

    fetchAirports();
  }, []);

  return <div>App</div>;
}
