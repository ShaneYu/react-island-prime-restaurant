import React from 'react';

import Menu from '../menu/Menu';
import BookTable from './book-table/BookTable';
import Intro from './intro/Intro';
import PopularItems from './popular-items/PopularItems';

const Home = () => (
  <div id="homePage">
    <Intro />
    <PopularItems className="py-3 py-lg-5" />
    <hr className="container" />
    <BookTable className="py-3 py-lg-5" />
    <hr className="container" />
    <Menu />
  </div>
);

export default Home;
