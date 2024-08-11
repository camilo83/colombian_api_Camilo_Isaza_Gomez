import { President } from '../../model/president';
import { ENV } from '../../utils/constants';

export class RepoPresident {
  url = `${ENV.API_URL}${ENV.ENDPOINTS.PRESIDENT}`;

  async getPresidents(): Promise<President[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const data: President[] = await response.json();
    return data;
  }
}
