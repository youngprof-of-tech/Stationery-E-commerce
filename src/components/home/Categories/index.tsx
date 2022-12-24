import Cat__1 from 'assets/images/cat__1.png';
import Cat__2 from 'assets/images/cat__2.png';
import Cat__3 from 'assets/images/cat__3.png';
import Cat__4 from 'assets/images/cat__4.png';
import Cat__5 from 'assets/images/cat__5.png';
import Cat__6 from 'assets/images/cat__6.png';
import Shop from 'assets/images/shop-categories.png';

const categories = [
  { image: Cat__1, title: 'Art and Crafts' },
  { image: Cat__2, title: 'Notebook and Diaries' },
  { image: Cat__3, title: 'Adhesive Stationery' },
  { image: Cat__4, title: 'Pen and Pencils' },
  { image: Cat__5, title: 'File and Folders' },
  { image: Cat__6, title: 'Other Stationery Items' },
];

const Categories = () => {
  return (
    <div className='w-[90%] mx-auto text-center'>
      <div>
        <h2 className='text-2xl md:text-3xl mb-2 xl:mb-4 font-bold'>Shop By Categories</h2>
        <p className='text-secondary w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto'>
          Essential Office Supplies In Our Online Stationery Shop That Keep Your
          Office Operations Smooth And Efficient
        </p>
      </div>

      <div className='mt-10 xl:mt-16 md:w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 justify-items-center xl:justify-items-start xl:flex justify-between'>
        {categories?.map((each) => {
          return (
            <div className='w-max h-max cursor-pointer'>
              <img
                src={each?.image}
                alt='Category 1'
                className='w-[10rem] h-[10rem] object-cover'
              />
              <p className='font-semibold mt-2'>{each?.title}</p>
            </div>
          );
        })}
      </div>

      <div className='mt-10 xl:mt-32 w-full md:w-[90%] mx-auto rounded-3xl overflow-hidden'>
        <img
          src={Shop}
          alt='Shop'
          className='w-full h-auto lg:h-[36rem] object-contain'
        />
      </div>
    </div>
  );
};

export default Categories;
