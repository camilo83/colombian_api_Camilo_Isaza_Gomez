import { act, renderHook } from '@testing-library/react';
import { RepoRegion } from '../../services/region/region';
import { Region } from '../../model/region';
import { useRegion } from './useregion';

jest.mock('../../services/region/region');

describe('useRegion', () => {
  const mockGetRegion = jest.fn();

  beforeEach(() => {
    (RepoRegion as jest.Mock).mockImplementation(() => ({
      getRegion: mockGetRegion,
    }));
  });

  it('should return department when loadRegion is called successfully', async () => {
    const region: Region = {
      id: 1,
      name: 'Engineering',
    };
    mockGetRegion.mockResolvedValue(region);

    const { result } = renderHook(() => useRegion());

    let loadedRegion;
    await act(async () => {
      loadedRegion = await result.current.loadRegion(1);
    });

    expect(loadedRegion).toEqual(region);
    expect(mockGetRegion).toHaveBeenCalledTimes(1);
  });
});
