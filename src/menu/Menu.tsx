import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Trail } from 'react-spring/renderprops';

import { GlobalState } from '../rootReducer';
import { menuActions } from './reducer';
import {
    getCategories, getCategoriesError, getIsFetchingCategories, getIsFetchingItems, getItems,
    getItemsError
} from './selectors';

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: GlobalState) => getItems(state));
  const categories = useSelector((state: GlobalState) => getCategories(state));

  const isFetching = useSelector((state: GlobalState) =>
    getIsFetchingCategories(state) || getIsFetchingItems(state)
  );

  const error = useSelector((state: GlobalState) =>
    getCategoriesError(state) || getItemsError(state));

  useEffect(() => {
    const requestCategories = async () => dispatch(menuActions.fetchCategories.started());
    const requestItems = async () => dispatch(menuActions.fetchItems.started());

    requestCategories();
    requestItems();
  }, [dispatch]);

  if (isFetching) {
    return <div>LOADING ITEMS...</div>;
  }

  if (error || !items) return null;

  return (
    <Trail
      items={categories}
      keys={(category) => category.id}
      from={{ opacity: 0, transform: 'translate3d(0, -40px, 0)' }}
      to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
    >
      {(category) => (props) => (
        <Container style={props}>
          <Row>
            <Col>{category.name}</Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <Trail
                  items={items.filter((item) => item.categoryId === category.id)}
                  keys={(item) => item.id}
                  from={{ opacity: 0, transform: 'translate3d(0, -40px, 0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                >
                  {(item) => (props) => (
                    <li style={props}>
                      {item.name} - &pound;{item.price}
                    </li>
                  )}
                </Trail>
              </ul>
            </Col>
          </Row>
        </Container>)}
    </Trail>
  );
};

export default Menu;
