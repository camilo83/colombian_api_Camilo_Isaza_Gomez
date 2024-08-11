import { useMemo } from 'react';
import { RepoDepartment } from '../../services/department/department';

export function useDepartment() {
  const repo = useMemo(() => new RepoDepartment(), []);

  const loadDepartment = async (id: number) => {
    try {
      const airports = await repo.getDepartment(id);
      return airports;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadDepartment,
  };
}
