import React from 'react';

import BookTable from './book-table/BookTable';
import Intro from './intro/Intro';
import PopularItems from './popular-items/PopularItems';

const Menu = () => (
  <div id="menuPage">
    <Intro />
    <PopularItems className="py-3 py-lg-5" />
    <hr className="container" />
    <BookTable className="py-3 py-lg-5" />
  </div>
);

export default Menu;
