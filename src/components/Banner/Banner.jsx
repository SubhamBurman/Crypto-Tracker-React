import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='w-full h-[25rem] relative'>
        <img
        src={bannerImage}
        className='h-full w-full object-cover'
        />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-4xl text-white shadow-2xl font-bold'>Welcome to Coin Tracker</h1>
            <p className='text-lg text-white'>Track your favorite coins</p>
        </div>    

    </div>
  )
}

export default Banner
