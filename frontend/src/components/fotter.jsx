import insta from '../assets/insta.jpeg'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'


function Fotter() {
    return (
        <div className='fotter lg:bottom-0 m-4 overflow-x-auto no-scrollbar'>
            <div className="p-4 lg:p-2 text-[#570D48] text-2xl">
                <h1 className='ibm-plex-serif-semibold '>ZigZag</h1>

            </div>

            <div className=" p-2 lg:p-0 lg:grid lg:grid-cols-3">
                <div className="grid md:grid-cols-2 gap-5 lg:w[50%]">
                    <div className="ibm-plex-serif-semibold p-2">
                        <p>Contact</p>
                        <p>Address: 312 Arapalayam main road,Madurai</p>
                        <p>Phone: +01 6217 6217 /(+91) 9080590805</p>
                        <p>Madurai: 10:00 to 5:00, Mon-Sun</p>
                        <div className='w-[20px] flex mt-3 gap-1 bg-transparent'>
                            <img src={insta} alt='insta' className='w-full'></img>
                            <img src={facebook} alt='facebook'></img>
                            <img src={twitter} alt='twitter'></img>
                            <img src={youtube} alt='insta'></img>
                        </div>
                    </div>




                </div>
                <div className="ibm-plex-serif-semibold p-2">
                    <h1 className="">Address</h1>
                    <p>About</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                    <p>Contact-us</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 p-2">
                    <div className="ibm-plex-serif-semibold">
                        <h1 className="">My account</h1>
                        <p>Sigin</p>
                        <p>Cart </p>
                        <p>Track my order</p>
                        <p>Help</p>
                        <p>Customer support</p>
                    </div>

                </div>

            </div>
            <div>
                <div className='lg:p-3'>
                    <div className='lg:flex lg:justify-between  bg-emerald-300 p-3'>
                        <h1 className='text-center'>© 2024 ZigZag</h1>
                        <p className='text-center '>Happy Shoppig!!!</p>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Fotter