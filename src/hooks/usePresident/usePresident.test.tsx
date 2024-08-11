import { act, renderHook } from '@testing-library/react';
import { usePresident } from './usePresident';
import { RepoPresident } from '../../services/president/president';

jest.mock('../../services/president/president');

describe('usePresident', () => {
  const mockGetPresidents = jest.fn();

  beforeEach(() => {
    (RepoPresident as jest.Mock).mockImplementation(() => ({
      getPresidents: mockGetPresidents,
    }));
  });

  it('should return presidents when loadPresidents is called successfully', async () => {
    const presidents = [
      {
        id: 1,
        name: 'Joe',
        lastName: 'Biden',
      },
    ];
    mockGetPresidents.mockResolvedValue(presidents);

    const { result } = renderHook(() => usePresident());

    let loadedPresidents;
    await act(async () => {
      loadedPresidents = await result.current.loadPresidents();
    });

    expect(loadedPresidents).toEqual(presidents);
    expect(mockGetPresidents).toHaveBeenCalledTimes(1);
  });
});
