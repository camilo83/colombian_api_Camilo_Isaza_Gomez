import { Region } from '../../model/region';
import { ENV } from '../../utils/constants';

export class RepoRegion {
  url = `${ENV.API_URL}${ENV.ENDPOINTS.REGION}`;

  async getRegion(id: number): Promise<Region> {
    const singleRegionUrl = `${this.url}/${id}`;
    const response = await fetch(singleRegionUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const data = await response.json();
    return data;
  }
}
