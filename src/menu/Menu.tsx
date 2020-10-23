import React, { useEffect } from 'react';
import { Button, Col, Container, Media, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Trail } from 'react-spring/renderprops';

import { GlobalState } from '../rootReducer';
import { menuActions } from './reducer';
import {
    getCategories,
    getCategoriesError,
    getIsFetchingCategories,
    getIsFetchingItems,
    getItems,
    getItemsError
} from './selectors';

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: GlobalState) => getItems(state));
  const categories = useSelector((state: GlobalState) => getCategories(state));
  const isFetching = useSelector((state: GlobalState) => getIsFetchingCategories(state) || getIsFetchingItems(state));
  const error = useSelector((state: GlobalState) => getCategoriesError(state) || getItemsError(state));

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
      config={{
        duration: 500
      }}
    >
      {(category) => (props) => (
        <Container as="section" className="menu__category my-5" style={props}>
          <Row>
            <Col className="text-center">
              <p className="menu__category_description">{category.description}</p>
              <h2 className="menu__category_name">{category.name}</h2>
            </Col>
          </Row>
          <Row noGutters>
            <Col className="menu__category_items d-flex flex-wrap">
              <Trail
                items={items.filter((item) => item.categoryId === category.id)}
                keys={(item) => item.id}
                from={{ opacity: 0, transform: 'translate3d(0, -40px, 0)' }}
                to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                config={{
                  duration: 500,
                  delay: 100
                }}
              >
                {(item) => (itemProps) => (
                  <Media className="col-12 col-lg-6" style={itemProps}>
                    <img
                      width={80}
                      height={80}
                      className="media-img img-fluid rounded-circle align-self-start mr-3"
                      src={require(`../assets/images/items/square/${item.id}.jpg`)}
                      alt={`${item.name}`}
                    />

                    <Media.Body>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </Media.Body>
                    <div className="media-actions d-flex flex-column justify-content-between align-self-start h-100 ml-3">
                      <div className="text-right">&pound;{item.price}</div>
                      <Button className="text-uppercase" variant="outline-dark" size="sm">Add</Button>
                    </div>
                  </Media>
                )}
              </Trail>
            </Col>
          </Row>
        </Container>
      )}
    </Trail>
  );
};

export default Menu;
