import 'jest-fetch-mock';
import { President } from '../../model/president';
import { RepoPresident } from './president';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;

  describe('When we instantiate getPresidents with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as President);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getPresidents should be used', async () => {
      const expected = {} as President;
      const repo = new RepoPresident();
      const result = await repo.getPresidents();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getPresidents and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getPresidents should throw an error', async () => {
      const repo = new RepoPresident();
      await expect(repo.getPresidents()).rejects.toThrow();
    });
  });
});
