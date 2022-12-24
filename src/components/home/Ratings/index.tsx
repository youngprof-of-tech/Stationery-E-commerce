import FilledStar from 'assets/star.svg';
import HalfStar from 'assets/half-star.svg';

const Ratings = ({
  ratings = 0,
  fullRatingsCount = 5,
}: {
  ratings: number;
  fullRatingsCount?: number;
}) => {
  const rate = Math.floor(ratings);
  console.log(rate);
  return (
    <div className='flex items-center'>
      {Array.from(Array(rate).keys()).map(() => {
        return <img src={FilledStar} alt='filled-star' className='w-5 h-5' />;
      })}
      {Array.from(Array(fullRatingsCount - rate).keys()).map(() => {
        return <img src={HalfStar} alt='filled-star' className='w-4 h-4' />;
      })}
    </div>
  );
};

export default Ratings;
