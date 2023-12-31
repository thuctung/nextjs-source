import React from 'react';
import useLocale from 'hooks/useLocale';

const HomePage = () => {
  const { locale, changeLocal } = useLocale();
  return (
    <>
      <h3>{locale.homepage.title}</h3>
      <p>{locale.homepage.content}</p>

      <button onClick={() => { changeLocal('vi'); }}>
        {locale.common.button.changeVi}
      </button>
      <button onClick={() => { changeLocal('en'); }}>
        {locale.common.button.changeEn}
      </button>
    </>
  );
};

export default HomePage;
