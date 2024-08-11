import { act, renderHook } from '@testing-library/react';
import { useAirport } from './useAirport';
import { RepoAirport } from '../../services/airport/airport';

jest.mock('../../services/airport/airport');

describe('useAirport', () => {
  const mockGetAirports = jest.fn();

  beforeEach(() => {
    (RepoAirport as jest.Mock).mockImplementation(() => ({
      getAirports: mockGetAirports,
    }));
  });

  it('should return airports when loadAirports is called successfully', async () => {
    const airports = [
      {
        id: 1,
        city: { id: 1, name: 'City 1' },
        department: { id: 1, name: 'Department 1', regionId: 1 },
        type: 'International',
      },
    ];
    mockGetAirports.mockResolvedValue(airports);

    const { result } = renderHook(() => useAirport());

    let loadedAirports;
    await act(async () => {
      loadedAirports = await result.current.loadAirports();
    });

    expect(loadedAirports).toEqual(airports);
    expect(mockGetAirports).toHaveBeenCalledTimes(1);
  });
});
