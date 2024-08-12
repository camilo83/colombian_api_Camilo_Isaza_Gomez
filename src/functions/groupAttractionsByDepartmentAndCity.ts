import { Department } from '../model/department';
import { TouristicAttraction } from '../model/touristic_attraction';

export interface AttractionCount {
  department: string;
  city: string;
  count: number;
}

export async function groupAttractionsByDepartmentAndCity(
  attractions: TouristicAttraction[],
  loadDepartment: (id: number) => Promise<Department | undefined>
): Promise<AttractionCount[]> {
  const attractionCounts: Record<string, Record<string, number>> = {};

  const departmentPromises = attractions.map(async (attraction) => {
    const department = await loadDepartment(attraction.city.departmentId);
    return { department, city: attraction.city.name };
  });

  const departmentResults = await Promise.all(departmentPromises);

  departmentResults.forEach(({ department, city }) => {
    if (department) {
      const departmentName = department.name;
      if (!attractionCounts[departmentName]) {
        attractionCounts[departmentName] = {};
      }
      if (attractionCounts[departmentName][city]) {
        attractionCounts[departmentName][city]++;
      } else {
        attractionCounts[departmentName][city] = 1;
      }
    }
  });

  const result: AttractionCount[] = [];
  Object.keys(attractionCounts).forEach((department) => {
    Object.keys(attractionCounts[department]).forEach((city) => {
      result.push({
        department,
        city,
        count: attractionCounts[department][city],
      });
    });
  });

  return result.sort((a, b) => b.count - a.count);
}
