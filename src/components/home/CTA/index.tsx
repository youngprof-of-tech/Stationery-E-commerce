import Logo from 'assets/images/CTA.png';

const CTA = () => {
  return (
    <div className='mt-5 mx-auto w-[90%] rounded-3xl overflow-hidden'>
      <img src={Logo} alt='Order now' className='w-full h-[36rem] object-cover' />
    </div>
  );
};

export default CTA;
