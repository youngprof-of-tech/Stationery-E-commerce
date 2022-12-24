import { useState } from 'react';
import Nav from './nav';
import Logo from 'assets/logo.svg';
import Menu from 'assets/menu.svg';
import Location from 'assets/location.svg';
import Login from 'assets/login.svg';
import Bag from 'assets/bag.svg';
import Search from 'assets/search.svg';
import { Button, Input } from '../../shared';

interface navsProps {
  name: String;
  select?: boolean;
}

const navs: navsProps[] = [
  {
    name: 'English',
    select: true,
  },
  {
    name: 'INR',
    select: true,
  },
  {
    name: 'Find A Store',
  },
];

const TopNav = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  return (
    <div className='mt-5 relative'>
      <div className='hidden lg:flex justify-between items-center w-[90%] mx-auto'>
        <span>Call: (+912 4467854</span>
        <p>
          Winter Sale Discount <span className='text-light-blue'>50% Off</span>
        </p>
        <ul className='flex items-center gap-x-6'>
          {navs.map((nav, index) => {
            return <Nav name={nav.name} key={index} select={nav?.select} />;
          })}
        </ul>
      </div>

      <div className='bg-gray py-1 lg:mt-7'>
        <div className='w-[90%] mx-auto flex items-center'>
          <div className='w-full lg:w-max flex items-center lg:flex-col xl:flex-row justify-between lg:justify-start'>
            <img src={Logo} alt='logo' className='w-[2.4rem] h-[2.4rem] md:w-[3.9rem] md:h-[3.9rem]' />
            <img
              src={Menu}
              alt='Menu'
              className='h-4 w-4 md:w-6 md:h-6 block lg:hidden'
              onClick={() => setOpenMobileNav(!openMobileNav)}
            />
            <div className='hidden lg:ml-0 lg:flex items-center justify-between xl:ml-20'>
              <span className='flex items-center gap-x-2 w-max'>
                <img src={Location} alt='location' className='w-4 h-4' />
                <p>Choose Your Location</p>
              </span>
            </div>
          </div>

          <div className='ml-20 hidden lg:flex justify-between items-center w-full'>
            <div>
              <Input
                name='Search'
                type='text'
                placeholder='Search'
                label=''
                className='!rounded-full overflow-hidden'
                inputClass='lg:w-[70%] xl:w-[35rem] py-[.7rem] pr-6'
                RightIcon={
                  <img src={Search} alt='Search' className='w-4 h-4' />
                }
              />
            </div>
            <div className='ml-auto flex items-center gap-x-5'>
              <Button
                name='Login'
                className='rounded-full w-max px-8 flex items-center gap-x-2'
                rightIcon={<img src={Login} alt='login' className='w-4 h-4' />}
              />
              <Button
                name='Add to Cart'
                className='rounded-full w-max px-8 flex items-center gap-x-2 bg-transparent !text-light-blue border border-light-blue'
                rightIcon={<img src={Bag} alt='Cart' className='w-4 h-4' />}
              />
            </div>
          </div>
        </div>
      </div>

      {openMobileNav ? (
        <div
          className='w-[80%] mx-auto shadow absolute top-[5.3rem] left-[50%] py-3 bg-white px-5'
          style={{
            transform: 'translate(-50%, 0)',
          }}
        >
          <div>
            <Input
              name='Search'
              type='text'
              placeholder='Search'
              label=''
              className='!rounded-full overflow-hidden border'
              inputClass='w-full py-[.7rem] pr-6'
              RightIcon={<img src={Search} alt='Search' className='w-4 h-4' />}
            />
          </div>

          <ul className='mt-7 mb-4 flex flex-col gap-y-3'>
            {navs.map((nav, index) => {
              return <Nav name={nav.name} key={index} select={nav?.select} />;
            })}
          </ul>

          <div>
            <Button
              name='Login'
              className='rounded-full w-max px-5 flex items-center gap-x-2 mb-4'
              rightIcon={<img src={Login} alt='login' className='w-4 h-4' />}
            />
            <Button
              name='Add to Cart'
              className='rounded-full w-max px-5 flex items-center gap-x-2 bg-transparent !text-light-blue border border-light-blue'
              rightIcon={<img src={Bag} alt='Cart' className='w-4 h-4' />}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TopNav;
