import React from 'react';
import Package1 from 'assets/images/package__1.png';
import Package2 from 'assets/images/package__2.png';
import Package3 from 'assets/images/package__3.png';
import Package4 from 'assets/images/package__4.png';
import Item from './Item';

const TabContents = ({
  items = [
    {
      image: Package1,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package2,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package3,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package4,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package1,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package2,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package3,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
    {
      image: Package4,
      name: 'Color box Package',
      promoPercentage: '10%',
      ratings: 4.5,
      numberOfRatings: 178,
      prevPrice: 'Rs 9.90',
      newPrice: 'Rs 7.90',
    },
  ],
}: any) => {
  return (
    <>
      {items.map((item: any) => {
        return <Item {...item} />;
      })}
    </>
  );
};

export default TabContents;
