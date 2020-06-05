import React, { useEffect } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Trail } from 'react-spring/renderprops';

import { GlobalState } from '../../rootReducer';
import { menuActions } from '../reducer';
import { getIsFetchingPopularItems, getPopularItems, getPopularItemsError } from '../selectors';

export interface PopularItemsProps {
  className?: string | undefined;
}

const PopularItemSkeleton2 = () => (
  <Col xs={12} md={6} lg={3} className="py-2">
    <Card className="card-effect-md-zoom shadow h-100 px-0">
      <Skeleton height={162} />
      <div className="card-body text-center px-3">
        <h4 className="card-title">
          <Skeleton />
        </h4>
        <p className="card-text">
          <Skeleton count={4} />
        </p>
      </div>
    </Card>
  </Col>
);

const PopularItemsLoader = () => (
  <>
    {Array(4)
      .fill({})
      .map((_, index) => (
        <PopularItemSkeleton2 key={index} />
      ))}
  </>
);

const PopularItems = ({ className }: PopularItemsProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: GlobalState) => getPopularItems(state));

  const isFetching = useSelector((state: GlobalState) =>
    getIsFetchingPopularItems(state)
  );

  const error = useSelector((state: GlobalState) =>
    getPopularItemsError(state)
  );

  useEffect(() => {
    const requestPopularItems = async () =>
      dispatch(menuActions.fetchPopularItems.started());

    requestPopularItems();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={className}>
      <Row style={{ minHeight: 385 }}>
        {error && (
          <Alert variant="danger">{`Error: ${JSON.stringify(error)}`}</Alert>
        )}

        {isFetching ? (
          <PopularItemsLoader />
        ) : (
          <Trail
            items={items}
            keys={(item) => item.id}
            from={{ opacity: 0, transform: 'translate3d(0, -40px, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          >
            {(item) => (props) => (
              <Col xs={12} sm={6} lg={3} className="py-2" style={props}>
                <Card className="card-effect-md-zoom shadow h-100 px-0">
                  <img
                    className="card-img-top img-fluid"
                    src={require(`../../assets/images/items/rectangle/${item.id}.jpg`)}
                    alt={item.name}
                  />
                  <div className="card-body text-center px-3">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                  </div>
                </Card>
              </Col>
            )}
          </Trail>
        )}
      </Row>
    </Container>
  );
};

export default PopularItems;
