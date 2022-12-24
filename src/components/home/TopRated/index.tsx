import { useState } from 'react';
import { Button } from '../../shared';
import TabContents from './TabContents';

const tabs = [
  {
    name: 'Notebook and Diaries',
    content: <TabContents />,
  },
  {
    name: 'Pen and Pencils',
    content: <TabContents />,
  },
  {
    name: 'Art and Crafts',
    content: <TabContents />,
  },
  {
    name: 'File and Folders',
    content: <TabContents />,
  },
  {
    name: 'Adhesive stationery',
    content: <TabContents />,
  },
  {
    name: 'Other Stationery Items',
    content: <TabContents />,
  },
];

const TopRated = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className='w-[90%] mx-auto bg-[#F1F1F1] py-20 px-10 xl:px-20'>
      <header className='flex items-center justify-center'>
        <div className='flex items-center mx-auto gap-x-10 mb-4'>
          <h2 className='text-3xl font-bold'>On Sale</h2>
          <h3 className='text-3xl font-bold text-[#A0A0A0]'>Top Rated</h3>
        </div>
        <Button
          name='View All'
          className='bg-transparent border border-light-blue text-light-blue rounded-full !w-max px-6 py-3'
        />
      </header>

      <div>
        <div>
          <div className='mt-1 xl:mt-4 flex items-center gap-x-4 justify-center'>
            {tabs?.slice(0, 4).map((each) => {
              return (
                <p
                  className={`cursor-pointer block xl:hidden ${
                    each === activeTab ? 'border-b border-b-primary' : ''
                  }`}
                  key={each.name}
                  onClick={() => setActiveTab(each)}
                >
                  {each.name}
                </p>
              );
            })}
            {tabs?.map((each) => {
              return (
                <p
                  className={`cursor-pointer hidden xl:block ${
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
          <div className='mt-10 xl:mt-16 w-[90%] mx-auto grid grid-cols-3 xl:grid-cols-4 gap-x-10 xl:gap-x-5 gap-y-8'>
            {activeTab.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
