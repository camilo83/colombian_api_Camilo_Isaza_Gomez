export type Airport = {
  id: number;
  city: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
    regionId: number;
  };
  type: string;
};
