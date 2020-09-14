import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Trail } from 'react-spring/renderprops';

import { GlobalState } from '../rootReducer';
import { menuActions } from './reducer';
import { getIsFetchingItems, getItems, getItemsError } from './selectors';

const groupBy = <T, K>(list: T[], getKey: (item: T) => K) => {
  const map = new Map<K, T[]>();

  list.forEach((item) => {
    const key = getKey(item);
    const collection = map.get(key);

    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return Array.from(map.values());
};

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: GlobalState) => getItems(state));

  const isFetching = useSelector((state: GlobalState) =>
    getIsFetchingItems(state)
  );

  const error = useSelector((state: GlobalState) => getItemsError(state));

  useEffect(() => {
    const requestItems = async () => dispatch(menuActions.fetchItems.started());

    requestItems();
  }, [dispatch]);

  if (isFetching) {
    return <div>LOADING ITEMS...</div>;
  }

  if (error || !items) return null;

  return (
    <>
      {groupBy(items, (item) => item.categoryId).map((group) => (
        <Container key={group[0].categoryId}>
          <Row>
            <Col>{group[0].categoryId}</Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <Trail
                  items={group}
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
        </Container>
      ))}
    </>
  );
};

export default Menu;
