import { TouristicAttraction } from '../../model/touristic_attraction';
import { ENV } from '../../utils/constants';

export class RepoTouristicAttraction {
  url = `${ENV.API_URL}${ENV.ENDPOINTS.TOURISTIC_ATTRACTION}`;

  async getAttraction(): Promise<TouristicAttraction[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const data = await response.json();
    return data;
  }
}
