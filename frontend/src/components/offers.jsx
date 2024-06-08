import { Link } from 'react-router-dom';
import offer1 from '../assets/deals-1.jpg';
import Mens from './catogries/mens assests/mens';
import { useEffect, useState } from 'react';
export function OfferZone(props) {

    const [gamenu, setgamenu] = useState('')
    const [gamecopon, setgamecopon] = useState(false)
    const [showSecondH1, setShowSecondH1] = useState(false);
    const [rand, setRand] = useState(Math.floor(Math.random() * 10));
    const randcoupon = props.randcoupon;
    const setrandcoupon = props.setrandcoupon
    console.log(rand)
    function handlegame(event) {
        setgamenu(event.target.value)
    }

    function gameend() {
        if (gamecopon) {
            alert('Already complete the Game')
        }

        else {
            if (Number(gamenu) == Number(rand)) {
                alert('sucess')
                setRand(Math.floor(Math.random() * 10));
                setgamenu([])
                setgamecopon(true)
                setShowSecondH1(false);
            }
            else {
                alert('failed')
                setgamenu([])
                setRand(Math.floor(Math.random() * 10));
                setTimeout(() => {
                    setShowSecondH1(false);
                }, 1000);
            }
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  p-5  gap-10 mt-10 '>
            <div className={`offer1 min-sm-w-[400px] min-h-[350px] lg:h-[400px]  bg-cover bg-center p-5 flex  flex-col justify-center overflow-x-auto no-scrollbar`} style={{ backgroundImage: `url(${offer1})` }}>
                <div className='flex flex-col gap-10'>
                    <div className=''>
                        <h1 className='font-bold text-2xl text-green-800'>Deal of the Day</h1>
                        <p className='mt-2'>Limited Quantities.............</p>
                    </div>

                    <div className='inline'>
                        <h1 className='text-xl w-[70%]'>Summer Collection New Modern Design</h1>
                    </div>

                    <div >
                        <h1 className='text-red-700 font-bold'>$<span>99</span><del className='ml-2 text-black opacity-50'>$9999</del></h1>
                    </div>

                    <div>
                        <h1>Hurry Up! Offer Ends in:</h1>
                    </div>

                    <div className='flex w-[100%]'>

                        <Link to={'/Mens'} element={<Mens></Mens>}>
                            <button className='bg-green-500 p-2 offershop--button'>Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`offer1 min-sm-w-[400px] min-h-[350px] lg:h-[400px]  bg-cover bg-center p-5 flex  flex-col justify-center overflow-x-auto no-scrollbar gap-5`} style={{ backgroundImage: `url(${offer1})` }}>
                <div>
                    <h2 className='font-bold text-2xl text-green-800'>Game Of the Day</h2>
                </div>

                <div className='w-[70%]'>
                    <h1><span className='font-bold text-red-400'>Rules:</span>You Guess the number Between 0 to 10 You Choose Correct Number and You win the Game Also available in $10 Copons  </h1>
                </div>

                <div className='offergame w-[50px] h-[50px] flex justify-center items-center'>
                    <h1 className={`font-bold  w-[20px] h-[20px] flex justify-center items-center  ${showSecondH1 ? ' text-black' : 'bg-black'}`}>{rand}</h1>
                </div>

                <div>
                    <input value={gamenu} onChange={handlegame} className='offergame__input' placeholder=' Gues Number'></input>
                </div>
                <div>
                    <button onClick={gameend} className='bg-gradient-to-r from-indigo-500 '>Submit</button>
                </div>

                <div>

                    {gamecopon ? <p><span className='font-bold'>Coupons Code: </span>{randcoupon}</p> : null
                    }
                </div>
            </div>

        </div >
    )
}
