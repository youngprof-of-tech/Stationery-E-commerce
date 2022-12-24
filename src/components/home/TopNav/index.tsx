import Nav from './nav';
import Logo from 'assets/logo.svg';
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
  return (
    <div className='mt-5'>
      <div className='flex justify-between items-center w-[90%] mx-auto'>
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

      <div className='bg-gray py-1 mt-7'>
        <div className='w-[90%] mx-auto flex items-center'>
          <img src={Logo} alt='logo' className='w-[3.9rem] h-[3.9rem]' />
          <div className='flex items-center justify-between ml-20'>
            <span className='flex items-center gap-x-2 w-max'>
              <img src={Location} alt='location' className='w-4 h-4' />
              <p>Choose Your Location</p>
            </span>
          </div>

          <div className='ml-20 flex justify-between items-center w-full'>
            <div>
              <Input
                name='Search'
                type='text'
                placeholder='Search'
                label=''
                className='!rounded-full overflow-hidden'
                inputClass='w-[35rem] py-[.7rem] pr-6'
                RightIcon={<img src={Search} alt='Search' className='w-4 h-4' />}
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
    </div>
  );
};

export default TopNav;
