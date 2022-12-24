import { useState } from 'react';

const Tabs = ({ tabs }: { tabs: any }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className='mt-3 flex items-center gap-x-4 justify-center'>
        {tabs?.map((each: any) => {
          return (
            <p
              className='cursor-pointer'
              key={each.name}
              onClick={() => setActiveTab(each)}
            >
              {each.name}
            </p>
          );
        })}
      </div>
      <div className='mt-6 w-[90%] mx-auto'>{activeTab?.content}</div>
    </div>
  );
};

export default Tabs;
