import React from 'react';
import { Button, Modal, ModalProps } from 'react-bootstrap';

import Order from './Order';

export type OrderModalProps = ModalProps & {
  onHide: () => void
};

const OrderModal: React.FC<OrderModalProps> = (props) => {
  const { onHide } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
  <Modal {...props} aria-labelledby="order-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="order-modal-title">
          Your order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Order />
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
