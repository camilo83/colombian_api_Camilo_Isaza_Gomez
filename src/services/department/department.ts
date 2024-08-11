import { Department } from '../../model/department';
import { ENV } from '../../utils/constants';

export class RepoDepartment {
  url = `${ENV.API_URL}${ENV.ENDPOINTS.DEPARTMENT}`;

  async getDepartment(id: number): Promise<Department> {
    const singledepartmentUrl = `${this.url}/${id}`;
    const response = await fetch(singledepartmentUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const data = await response.json();
    return data;
  }
}
