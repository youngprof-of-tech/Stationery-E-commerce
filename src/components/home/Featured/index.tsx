import { useState } from 'react';
import Package1 from 'assets/images/package__1.png';
import Package2 from 'assets/images/package__2.png';
import Package3 from 'assets/images/package__3.png';
import Package4 from 'assets/images/package__4.png';
import Download from 'assets/images/download-app.png';
import TabContents from '../TopRated/TabContents';

const items = [
  {
    image: Package1,
    name: 'Color box Package',
    promoPercentage: '10%',
    ratings: 4.5,
    numberOfRatings: 178,
    prevPrice: 'Rs 9.90',
    newPrice: 'Rs 7.90',
    featured: true,
  },
  {
    image: Package2,
    name: 'Color box Package',
    promoPercentage: '10%',
    ratings: 4.5,
    numberOfRatings: 178,
    prevPrice: 'Rs 9.90',
    newPrice: 'Rs 7.90',
    featured: true,
  },
  {
    image: Package3,
    name: 'Color box Package',
    promoPercentage: '10%',
    ratings: 4.5,
    numberOfRatings: 178,
    prevPrice: 'Rs 9.90',
    newPrice: 'Rs 7.90',
    featured: true,
  },
  {
    image: Package4,
    name: 'Color box Package',
    promoPercentage: '10%',
    ratings: 4.5,
    numberOfRatings: 178,
    prevPrice: 'Rs 9.90',
    newPrice: 'Rs 7.90',
    featured: true,
  },
];

const tabs = [
  {
    name: 'Notebook and Diaries',
    content: <TabContents items={items} />,
  },
  {
    name: 'Pen and Pencils',
    content: <TabContents items={items} />,
  },
  {
    name: 'Art and Crafts',
    content: <TabContents items={items} />,
  },
  {
    name: 'File and Folders',
    content: <TabContents items={items} />,
  },
  {
    name: 'Adhesive stationery',
    content: <TabContents items={items} />,
  },
  {
    name: 'Other Stationery',
    content: <TabContents items={items} />,
  },
];

const Featured = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className='w-[90%] mx-auto py-20 px-20'>
      <header className='flex items-center justify-center'>
        <div className='flex items-center mx-auto gap-x-10'>
          <h2 className='text-3xl mb-4 font-bold'>Featured Products</h2>
        </div>
      </header>

      <div>
        <div>
          <div className='mt-4 flex items-center gap-x-4 justify-center'>
            {tabs?.map((each) => {
              return (
                <p
                  className={`cursor-pointer ${
                    each === activeTab ? 'border-b border-b-primary' : ''
                  }`}
                  key={each.name}
                  onClick={() => setActiveTab(each)}
                >
                  {each.name}
                </p>
              );
            })}
          </div>
          <div className='mt-16 w-[90%] mx-auto grid grid-cols-4 gap-x-5 gap-y-8'>
            {activeTab.content}
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <img src={Download} alt='Download' className='object-cover h-auto' />
      </div>
    </div>
  );
};

export default Featured;
