import CreateUser from '../features/user/CreateUser';
import Button from '../ui/Button'


function Home() {
  return (
    <div className='mt-10 px-4 text-center sm:my-16'>
      <h1 className="text-center text-xl font-semibold text-stone-700 mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
     
    </div>
  );
}

export default Home;
