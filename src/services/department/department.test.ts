import 'jest-fetch-mock';
import { Department } from '../../model/department';
import { RepoDepartment } from './department';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;

  describe('When we instantiate getDepartment with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as Department);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getDepartment should be used', async () => {
      const department = {
        id: 1,
      } as unknown as Department;
      const expected = {} as Department;
      const repo = new RepoDepartment();
      const result = await repo.getDepartment(department.id);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getDepartment and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getDepartment should throw an error', async () => {
      const department = {
        id: 1,
      } as unknown as Department;
      const repo = new RepoDepartment();
      await expect(repo.getDepartment(department.id)).rejects.toThrow();
    });
  });
});
