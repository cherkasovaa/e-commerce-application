import countries from 'i18n-iso-countries/langs/en.json';

const isValidCountryCode = (
  code: string
): code is keyof typeof countries.countries => {
  return code in countries.countries;
};

export const getCountryName = (countryCode: string): string => {
  if (isValidCountryCode(countryCode)) {
    const countryName = countries.countries[countryCode];
    return Array.isArray(countryName) ? countryName[0] : countryName;
  }
  return countryCode;
};
