import React from 'react';

import useLocale from 'hooks/useLocale';

const Blogs = () => {
  const { locale, changeLocal } = useLocale();

  return (
    <div>
      <h1>{locale.blog.title}</h1>
      <button onClick={() => { changeLocal('vi'); }}>
        {locale.common.button.changeVi}
      </button>
      <button onClick={() => { changeLocal('en'); }}>
        {locale.common.button.changeEn}
      </button>
    </div>
  );
};

export default Blogs;
