import CTAImg from 'assets/images/CTA.png';

const CTA = () => {
  return (
    <div className='mt-4 sm:mt-0 xl:mt-5 mx-auto w-[90%] rounded-3xl overflow-hidden'>
      <img
        src={CTAImg}
        alt='Order now'
        className='w-full md:h-auto lg:h-[36rem] md:object-contain'
      />
    </div>
  );
};

export default CTA;
