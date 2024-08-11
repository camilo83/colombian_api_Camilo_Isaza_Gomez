import { act, renderHook } from '@testing-library/react';
import { useDepartment } from './useDepartment';
import { RepoDepartment } from '../../services/department/department';
import { Department } from '../../model/department';

jest.mock('../../services/department/department');

describe('useDepartment', () => {
  const mockGetDepartment = jest.fn();

  beforeEach(() => {
    (RepoDepartment as jest.Mock).mockImplementation(() => ({
      getDepartment: mockGetDepartment,
    }));
  });

  it('should return department when loadDepartment is called successfully', async () => {
    const department: Department = {
      id: 1,
      name: 'Engineering',
      regionId: 10,
    };
    mockGetDepartment.mockResolvedValue(department);

    const { result } = renderHook(() => useDepartment());

    let loadedDepartment;
    await act(async () => {
      loadedDepartment = await result.current.loadDepartment(1);
    });

    expect(loadedDepartment).toEqual(department);
    expect(mockGetDepartment).toHaveBeenCalledTimes(1);
  });
});
