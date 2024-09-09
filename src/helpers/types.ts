export type Area = {
  area: number;
  name: string;
  website: string;
  districts: District[];
};

export type District = {
  id: number;
  district: string;
  name: string | null;
  website: string | null;
  language: "en" | "es" | "fr";
  color: string;
  boundary: [number, number][];

  button: HTMLButtonElement;
  polygon: google.maps.Polygon;
  index?: string;
  bounds: google.maps.LatLngBounds;
  paths: google.maps.LatLngLiteral[];
  surfaceArea: number;
};
