import React, { useState } from 'react';
import ListOfCards from '../../components/ListOfCards';
import Card from '../../components/Card';
import FilterContainer from '../../components/FilterContainer';
import FilterContainerMovil from '../../components/FilterContainerMovil';
import ButtonModal from '../../components/ButtonModal';
import Filter from '../../components/Filter';
import Modal from '../../components/Modal';
import InfoModal from '../../components/InfoModal';
import useModal from '../../hooks/useModal';
import './Marketplace.css';

const Marketplace = () => {
  const [modal, toggleModal] = useModal();
  const [info, setInfo] = useState(false);
  const [price, setPrice] = useState(false);
  const [size, setSize] = useState(false);

  return (
    <div className="marketplace">
      <FilterContainerMovil>
        <ButtonModal name="talla" toggleModal={toggleModal} />
        <ButtonModal name="precio" toggleModal={toggleModal} />
      </FilterContainerMovil>
      <FilterContainer>
        <Filter
          title="Precio"
          items={[
            'up to $25',
            '$25 to $50',
            '$50 to $100',
            '$100 to $200',
            '$200 & above'
          ]}
        />
        <Filter title="Talla" items={['35', '36', '37', '38', '39']} />
      </FilterContainer>
      <ListOfCards>
        <Card toggleModal={toggleModal} />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListOfCards>
      {modal && (
        <Modal
          toggleModal={toggleModal}
          info={info}
          price={price}
          size={size}
          onInfo={() => <InfoModal />}
          onPrice={() => (
            <Filter
              title="Precio"
              items={[
                'up to $25',
                '$25 to $50',
                '$50 to $100',
                '$100 to $200',
                '$200 & above'
              ]}
            />
          )}
          onSize={() => (
            <Filter title="Talla" items={['35', '36', '37', '38', '39']} />
          )}
        />
      )}
    </div>
  );
};

export default Marketplace;
