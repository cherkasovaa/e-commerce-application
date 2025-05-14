import { useEffect, useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import type { CountryType } from './types';

countries.registerLocale(enLocale);

export const useCountryList = () => {
  const [countriesList, setCountriesList] = useState<CountryType[]>([]);

  useEffect(() => {
    const countriesData = Object.entries(
      countries.getNames('en', { select: 'official' })
    ).map(([code, label]) => ({
      code,
      label,
    }));

    setCountriesList(countriesData);
  }, []);

  return countriesList;
};
