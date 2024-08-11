import 'jest-fetch-mock';
import { TouristicAttraction } from '../../model/touristic_attraction';
import { RepoTouristicAttraction } from './touristic_attraction';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;

  describe('When we instantiate getAttraction with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as TouristicAttraction);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getAttraction should be used', async () => {
      const expected = {} as TouristicAttraction;
      const repo = new RepoTouristicAttraction();
      const result = await repo.getAttraction();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getAttraction and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getAttraction should throw an error', async () => {
      const repo = new RepoTouristicAttraction();
      await expect(repo.getAttraction()).rejects.toThrow();
    });
  });
});
