import { Airport } from '../model/airport';

interface AirportCount {
  department: string;
  city: string;
  count: number;
}

export async function groupAirportsByDepartmentAndCity(
  airports: Airport[]
): Promise<AirportCount[]> {
  const airportCounts: Record<string, Record<string, number>> = {};

  airports.forEach((airport) => {
    const departmentName = airport.department.name;
    const cityName = airport.city.name;

    if (!airportCounts[departmentName]) {
      airportCounts[departmentName] = {};
    }

    if (airportCounts[departmentName][cityName]) {
      airportCounts[departmentName][cityName]++;
    } else {
      airportCounts[departmentName][cityName] = 1;
    }
  });

  const result: AirportCount[] = [];
  Object.keys(airportCounts).forEach((department) => {
    Object.keys(airportCounts[department]).forEach((city) => {
      result.push({
        department,
        city,
        count: airportCounts[department][city],
      });
    });
  });

  return result.sort((a, b) => b.count - a.count);
}
