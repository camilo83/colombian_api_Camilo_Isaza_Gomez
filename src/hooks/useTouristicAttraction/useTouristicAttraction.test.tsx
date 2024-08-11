import { act, renderHook } from '@testing-library/react';
import { useTouristicAttraction } from './useTouristicAttraction';
import { RepoTouristicAttraction } from '../../services/touristic_attraction/touristic_attraction';

jest.mock('../../services/touristic_attraction/touristic_attraction');

describe('useTouristicAttraction', () => {
  const mockGetAttractions = jest.fn();

  beforeEach(() => {
    (RepoTouristicAttraction as jest.Mock).mockImplementation(() => ({
      getAttraction: mockGetAttractions,
    }));
  });

  it('should return attractions when loadAttraction is called successfully', async () => {
    const attractions = [
      {
        id: 1,
      },
    ];
    mockGetAttractions.mockResolvedValue(attractions);

    const { result } = renderHook(() => useTouristicAttraction());

    let loadedAttractions;
    await act(async () => {
      loadedAttractions = await result.current.loadAttraction();
    });

    expect(loadedAttractions).toEqual(attractions);
    expect(mockGetAttractions).toHaveBeenCalledTimes(1);
  });
});
