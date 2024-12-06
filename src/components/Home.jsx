import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import HomeCard from './HomeCard';


const Home = () => {
    const homeCards = useLoaderData()
    // console.log(homeCards)
    return (
        <div className='bg-blue-200'>
           <Banner></Banner>
           <Outlet></Outlet>
           <div className='w-10/12 mx-auto'>
             <h2 className='text-2xl font-bold text-center mb-3 mt-3'>Find Highest Rating Games Here</h2>
             {
                homeCards.slice(0, 6).map(homeCard => <HomeCard key={homeCard._id} homeCard={homeCard}></HomeCard>)
             }
           </div>
        </div>
        
    );
};

export default Home;