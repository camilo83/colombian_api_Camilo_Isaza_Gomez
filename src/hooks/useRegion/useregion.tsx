import { useMemo } from 'react';
import { RepoRegion } from '../../services/region/region';

export function useRegion() {
  const repo = useMemo(() => new RepoRegion(), []);

  const loadRegion = async (id: number) => {
    try {
      const airports = await repo.getRegion(id);
      return airports;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadRegion,
  };
}
