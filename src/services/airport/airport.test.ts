import 'jest-fetch-mock';
import { Airport } from '../../model/airport';
import { RepoAirport } from './airport';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;

  describe('When we instantiate getAirports with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as Airport);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getAirports should be used', async () => {
      const expected = {} as Airport;
      const repo = new RepoAirport();
      const result = await repo.getAirports();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getAirports and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getAirports should throw an error', async () => {
      const repo = new RepoAirport();
      await expect(repo.getAirports()).rejects.toThrow();
    });
  });
});
