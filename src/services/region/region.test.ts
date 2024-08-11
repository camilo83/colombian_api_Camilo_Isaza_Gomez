import 'jest-fetch-mock';
import { Region } from '../../model/region';
import { RepoRegion } from './region';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;

  describe('When we instantiate getRegion with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as Region);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getRegion should be used', async () => {
      const region = {
        id: 1,
      } as unknown as Region;
      const expected = {} as Region;
      const repo = new RepoRegion();
      const result = await repo.getRegion(region.id);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getRegion and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getRegion should throw an error', async () => {
      const region = {
        id: 1,
      } as unknown as Region;
      const repo = new RepoRegion();
      await expect(repo.getRegion(region.id)).rejects.toThrow();
    });
  });
});
