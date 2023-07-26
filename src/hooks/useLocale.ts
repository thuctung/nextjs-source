import { useRouter } from 'next/router';

import en from 'languages/en';
import vi from 'languages/vi';
import { useMemo } from 'react';

interface Locale {
  currentLang: string
  locale: any
  changeLocal: (value?: string) => void
}

const useLocale = (): Locale => {
  const router = useRouter();
  let { locale: localeRouter, pathname } = router;
  localeRouter = localeRouter ?? 'en';
  const locale = useMemo(() => {
    switch (localeRouter) {
      case 'vi': {
        return vi;
      }
      case 'en': {
        return en;
      }
      default: {
        return en;
      }
    }
  }, [localeRouter]);

  const changeLocal = (lange: string) => {
    router.replace(pathname, pathname, { locale: lange }).catch((err) => {
      throw Error(err);
    });
  };

  return { locale, changeLocal, currentLang: localeRouter };
};

export default useLocale;
