import { Button } from './../../shared';
import Share from 'assets/share.svg';
import Ratings from '../Ratings';

const Item = ({
  image,
  name,
  promoPercentage,
  ratings,
  numberOfRatings,
  prevPrice,
  newPrice,
  featured = false
}: any) => {
  return (
    <div className='w-[15rem]'>
      <div
        className={`relative w-max ${
          featured ? 'bg-[#F1F1F1]' : 'bg-white'
        } py-5 px-5 rounded`}
      >
        <img
          src={image}
          alt='Package1'
          className='w-[13rem] h-[15rem] object-cover'
        />
        <div>
          <img
            src={Share}
            alt='share'
            className='w-5 h-5 absolute top-[.5rem] right-2'
          />
        </div>
      </div>
      <div className='mt-5'>
        <span className='font-medium'>
          {name}
          <span className='text-[#107100] ml-2'>({promoPercentage} off)</span>
        </span>
        <div className='flex items-center justify-between mt-1'>
          <div className='flex items-center gap-x-3'>
            <span className='font-medium'>{ratings}</span>
            <Ratings ratings={ratings} />
          </div>
          <span className='text-[#535353] text-sm'>
            {numberOfRatings} ratings
          </span>
        </div>
      </div>
      <div className='my-3'>
        <span className='text-[#838383] text-sm mr-2 line-through'>
          {prevPrice}
        </span>
        <span className='text-[#1A95BD] font-semibold text-lg'>{newPrice}</span>
      </div>
      <Button
        name='Add'
        className='bg-transparent border border-light-blue text-light-blue rounded-lg !w-full'
      />
    </div>
  );
};

export default Item;