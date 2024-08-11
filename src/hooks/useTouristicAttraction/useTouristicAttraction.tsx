import { useMemo } from 'react';
import { RepoTouristicAttraction } from '../../services/touristic_attraction/touristic_attraction';

export function useTouristicAttraction() {
  const repo = useMemo(() => new RepoTouristicAttraction(), []);

  const loadAttraction = async () => {
    try {
      const attractions = await repo.getAttraction();
      return attractions;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadAttraction,
  };
}
