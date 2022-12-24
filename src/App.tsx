import {
  Categories,
  CTA,
  TopNav,
  TopRated,
  Featured,
  Footer,
} from './components/home';

function App() {
  return (
    <div className='grid gap-y-[3rem] md:gap-y-[4rem] xl:gap-y-[10rem] xl:max-w-[1600px] mx-auto'>
      <div>
        <TopNav />
        <CTA />
      </div>
      <Categories />
      <TopRated />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
