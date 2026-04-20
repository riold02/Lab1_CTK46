export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt?: string;
}

export interface Country {
  name: CountryName;
  cca3: string;
  flag?: string;
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];
  flags: CountryFlag;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol?: string }>;
  area: number;
  timezones: string[];
}
