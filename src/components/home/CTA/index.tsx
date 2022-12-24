import CTAImg from 'assets/images/CTA.png';

const CTA = () => {
  return (
    <div className='xl:mt-5 mx-auto w-[90%] rounded-3xl overflow-hidden'>
      <img
        src={CTAImg}
        alt='Order now'
        className='w-full h-[36rem] object-contain'
      />
    </div>
  );
};

export default CTA;
