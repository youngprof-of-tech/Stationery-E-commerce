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
    <div className='grid gap-y-[10rem]'>
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
