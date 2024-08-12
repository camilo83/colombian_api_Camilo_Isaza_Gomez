import { Airport } from '../model/airport';
import { Region } from '../model/region';

interface ComplexAirportGrouping {
  region: string;
  department: string;
  city: string;
  type: string;
  count: number;
}

export async function groupAirportsByRegionDepartmentCityAndType(
  airports: Airport[],
  loadRegion: (id: number) => Promise<Region | undefined>
): Promise<ComplexAirportGrouping[]> {
  const airportCounts: Record<
    string,
    Record<string, Record<string, Record<string, number>>>
  > = {};
  const regionCache: Record<number, Region | undefined> = {};

  const regionPromises = airports.map(async (airport) => {
    const regionId = airport.department.regionId;

    if (!regionCache[regionId]) {
      regionCache[regionId] = await loadRegion(regionId);
    }

    const regionName = regionCache[regionId]?.name;
    const departmentName = airport.department.name;
    const cityName = airport.city.name;
    const type = airport.type;

    if (regionName) {
      if (!airportCounts[regionName]) {
        airportCounts[regionName] = {};
      }

      if (!airportCounts[regionName][departmentName]) {
        airportCounts[regionName][departmentName] = {};
      }

      if (!airportCounts[regionName][departmentName][cityName]) {
        airportCounts[regionName][departmentName][cityName] = {};
      }

      if (airportCounts[regionName][departmentName][cityName][type]) {
        airportCounts[regionName][departmentName][cityName][type]++;
      } else {
        airportCounts[regionName][departmentName][cityName][type] = 1;
      }
    }
  });

  await Promise.all(regionPromises);

  const result: ComplexAirportGrouping[] = [];
  Object.keys(airportCounts).forEach((region) => {
    Object.keys(airportCounts[region]).forEach((department) => {
      Object.keys(airportCounts[region][department]).forEach((city) => {
        Object.keys(airportCounts[region][department][city]).forEach((type) => {
          result.push({
            region,
            department,
            city,
            type,
            count: airportCounts[region][department][city][type],
          });
        });
      });
    });
  });

  return result.sort((a, b) => b.count - a.count);
}
