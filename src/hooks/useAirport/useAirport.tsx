import { useMemo } from 'react';
import { RepoAirport } from '../../services/airport/airport';

export function useAirport() {
  const repo = useMemo(() => new RepoAirport(), []);

  const loadAirports = async () => {
    try {
      console.log('Repo instance:', repo);
      const airports = await repo.getAirports();
      console.log('Airports loaded:', airports);
      return airports;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadAirports,
  };
}
