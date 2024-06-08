import profileimag from '../assets/salesimage-profile.png'


function Profile() {
    return (
        <div className='collections mt-10 md:flex md:justify-between space-x-10 space-y-10 overflow-auto no-scrollbar'>
            <div className='collection--hfss flex justify-center items-center'>
                <div className='space-y-4 text-center'>
                    <h1 className='md:text-2xl'>Hot Promotions</h1>
                    <h1 className='md:text-5xl'>Fashion Trending <span className='text-green-800 text-2xl md:text-5xl hfss--s'>Great Collection</span></h1>
                    <p className='md:text-4xl'>Save more with coupons & up to 20% off</p>
                    <div className='hfss-bd'>
                        <button className='hfss-b'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='md:w-[50%]'>
                <img src={profileimag} alt='profileimage' className='collections--img flex justify-center items-center'></img>
            </div>

        </div>
    )
}

export default Profile