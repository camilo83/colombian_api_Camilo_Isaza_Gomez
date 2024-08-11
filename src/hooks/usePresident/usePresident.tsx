import { useMemo } from 'react';
import { RepoPresident } from '../../services/president/president';

export function usePresident() {
  const repo = useMemo(() => new RepoPresident(), []);

  const loadPresidents = async () => {
    try {
      const airports = await repo.getPresidents();
      return airports;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadPresidents,
  };
}
