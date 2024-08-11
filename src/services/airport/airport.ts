import { Airport } from '../../model/airport';
import { ENV } from '../../utils/constants';

export class RepoAirport {
  url = `${ENV.API_URL}${ENV.ENDPOINTS.AIRPORT}`;

  async getAirports(): Promise<Airport[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const data = await response.json();
    return data;
  }
}
