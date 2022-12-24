import Logo from 'assets/footer-logo.svg';
import Product1 from 'assets/images/products__1.png';
import Product2 from 'assets/images/products__2.png';
import Product3 from 'assets/images/products__3.png';
import Product4 from 'assets/images/products__4.png';
import Product5 from 'assets/images/products__5.png';
import Product6 from 'assets/images/products__6.png';
import Facebook from 'assets/facebook.svg';
import Instagram from 'assets/instagram.svg';
import Twitter from 'assets/twitter.svg';
import LinkedIn from 'assets/linkedin.svg';
import Phone from 'assets/phone.svg';
import Location from 'assets/pin.svg';
import Email from 'assets/e-mail.svg';
import { Button, Input } from 'components/shared';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#0E556C] to-[#1A95BD]'>
      <div className='w-[90%] mx-auto pt-16'>
        <div className='pb-16 flex flex-col lg:flex-row lg:items-center justify-between border-b-[.25px] border-b-white'>
          <div>
            <h3 className='text-white text-xl md:text-2xl font-bold mb-1'>
              Subscribe to Our Newsletter
            </h3>
            <p className='text-white'>
              It is a long established fact that a reader will be distracted
              readable{' '}
            </p>
          </div>

          <div className='flex flex-col md:flex-row md:items-center mt-4 lg:mt-0'>
            <Input
              type='text'
              name='search'
              placeholder='Enter Your Email'
              className='py-1.5 rounded-l shadow w-[20rem]'
            />
            <Button
              name='Subscribe'
              className='rounded-none rounded-r shadow'
            />
          </div>
        </div>
        <div className='my-8 md:my-20 grid md:grid-cols-2 gap-x-10 lg:gap-x-0 lg:grid-cols-3 gap-y-5 xl:flex justify-between'>
          <div className='flex flex-col gap-y-2'>
            <img src={Logo} alt='Logo' className='w-10 h-10 mb-5' />
            <p className='text-white xl:w-[25rem]'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className='flex items-center gap-x-3 mt-3'>
              <div className='bg-white rounded-full p-1.5 cursor-pointer'>
                <img src={Facebook} alt='Facebook' className='w-3.5 h-3.5' />
              </div>
              <div className='bg-white rounded-full p-1.5 cursor-pointer'>
                <img src={Instagram} alt='Instagram' className='w-3.5 h-3.5' />
              </div>
              <div className='bg-white rounded-full p-1.5 cursor-pointer'>
                <img src={Twitter} alt='Twitter' className='w-3.5 h-3.5' />
              </div>
              <div className='bg-white rounded-full p-1.5 cursor-pointer'>
                <img src={LinkedIn} alt='LinkedIn' className='w-3.5 h-3.5' />
              </div>
            </div>
          </div>
          <div>
            <h4 className='text-white mb-3 xl:mb-8 font-semibold text-lg'>
              Useful Links
            </h4>
            <ul className='flex flex-col gap-y-2 font-medium'>
              <li className='text-white cursor-pointer'>Home</li>
              <li className='text-white cursor-pointer'>Terms & Conditions</li>
              <li className='text-white cursor-pointer'>Privacy Policy</li>
              <li className='text-white cursor-pointer'>FAQs</li>
              <li className='text-white cursor-pointer'>About Us</li>
            </ul>
          </div>
          <div>
            <h4 className='text-white mb-3 xl:mb-8 font-semibold text-lg'>
              Contact Us
            </h4>
            <ul className='flex flex-col gap-y-2'>
              <li className='flex items-center text-white gap-x-3 font-medium cursor-pointer'>
                <img src={Phone} alt='' className='w-4 h-4' />
                (0776)1213245
              </li>
              <li className='flex items-center text-white gap-x-3 cursor-pointer font-medium'>
                <img src={Location} alt='' className='w-4 h-4' />
                Chiragnagar, Mumbai, India
              </li>
              <li className='flex items-center text-white gap-x-3 font-medium cursor-pointer'>
                <img src={Email} alt='' className='w-4 h-4' />
                yourmail1867@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-white mb-8 font-semibold text-lg'>
              Our Products
            </h4>
            <div className='grid grid-cols-3 lg:gap-x-2 gap-y-3'>
              <img
                src={Product1}
                alt='Product 1'
                className='text-white w-16 h-16'
              />
              <img
                src={Product2}
                alt='Product 2'
                className='text-white w-16 h-16'
              />
              <img
                src={Product3}
                alt='Product 3'
                className='text-white w-16 h-16'
              />
              <img
                src={Product4}
                alt='Product 4'
                className='text-white w-16 h-16'
              />
              <img
                src={Product5}
                alt='Product 5'
                className='text-white w-16 h-16'
              />
              <img
                src={Product6}
                alt='Product 6'
                className='text-white w-16 h-16'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#003B4F] text-center text-white py-1'>
        Copyright © 2022 Lorem. All Right reserved.
      </div>
    </div>
  );
};

export default Footer;
