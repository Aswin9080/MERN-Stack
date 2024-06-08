import { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Frontpage from '../components/frontpage';
import Mens from './catogries/mens assests/mens';
import Fotter from './fotter';
import { useNavigate } from 'react-router-dom';
import Menus from './catogries/menus';

function Cards(props) {
    const navigate = useNavigate();

    const sc = props.sc;
    const setsc = props.setsc;
    const randcoupon = props.randcoupon;
    console.log(randcoupon)
    const setrandcoupon = props.setrandcoupon;

    const [empty, setEmpty] = useState(sc.length === 0);
    const [totals, setTotals] = useState([]);
    const [coupons, setcoupons] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [GameisCouponApplied, GamesetIsCouponApplied] = useState(false);
    const [gameinput, setgameinput] = useState('');

    useEffect(() => {
        const newTotals = sc.map(item => item.rupees * item.quantity);
        setTotals(newTotals);
    }, [sc]);

    function handledel(ids) {
        const newproduct = sc.filter(item => item.id !== ids.id);
        setsc(newproduct);
        setEmpty(newproduct.length === 0);
    }

    function decrease(id) {
        const updatedProducts = sc.map(item => {
            if (item.id === id && item.quantity > 0) {
                return { ...item, quantity: Number(item.quantity) - Number(1) };
            }
            return item;
        });
        setsc(updatedProducts);
    }

    function increase(id) {
        const updatedProducts = sc.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Number(item.quantity) + Number(1) };
            }
            return item;
        });
        setsc(updatedProducts);
    }

    function couponchange(event) {
        setcoupons(event.target.value);
    }

    function handlecoupons() {
        if (isCouponApplied) {
            alert('Coupon already applied');
        } else {
            if (coupons === 'ZigZag143') {
                alert('Coupon Applied');
                setIsCouponApplied(true);
            } else {
                alert('Coupon invalid');
            }
        }
    }

    function gamesubmit() {
        if (GameisCouponApplied) {
            alert('Already Use Game Coupon')
        }
        else {
            if (Number(gameinput) === Number(randcoupon)) {
                alert('Successfully Game Coupon applied');
                GamesetIsCouponApplied(true)
                const GC=GamesetIsCouponApplied
            } else {
                //console.log('gameinput', gameinput);
                //console.log('randcoupon', randcoupon);
                alert('Coupon Invalid');
            }
        }}

    function handlegameinput(event) {
        setgameinput(event.target.value);
    }

    function billing() {
        navigate('/Billing', { state: { discount: discount,Gamecoupons:Gamecoupons } });
    }

    const Gamecoupons= GameisCouponApplied ? 10:0
    const subtotal = totals.length > 0 ? totals.reduce((acc, curr) => acc + curr, 0) : 0;
    const discount = isCouponApplied ? 10 : 0;
    const total = subtotal - discount - Gamecoupons;
    return (
        <div>
            <Navbar />
            <div className='mt-2 mb-10 bg-gray-300'>
                <Menus />
            </div>
            {empty ? (
                <h1 className='text-2xl bg-gradient-to-r from-blue-900 to-red-100 bg-clip-text text-transparent text-center'>
                    No one purchase it
                </h1>
            ) : (
                <div className="overflow-x-auto no-scrollbar">
                    <table className="table-auto w-full">
                        <thead className="bg-white sticky top-0">
                            <tr>
                                <th className="px-4 py-2">Product Image</th>
                                <th className="px-4 py-2">Product name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sc.map((val, index) => (
                                <tr key={val.id} className='text-center'>
                                    <td className="border px-4 py-2"><img src={val.image} className='w-[100px] m-auto' alt="productimage" /></td>
                                    <td className="border px-4 py-2">{val.style}</td>
                                    <td className="border px-4 py-2">${val.rupees}</td>
                                    <td className="border px-4 py-2">
                                        <div className='flex justify-center gap-3 items-center'>
                                            <svg onClick={() => decrease(val.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 cursor-pointer">
                                                <path d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1-18 0Z" />
                                            </svg>
                                            <div><p>{val.quantity}</p></div>
                                            <svg onClick={() => increase(val.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 cursor-pointer">
                                                <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1-18 0Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="border px-4 py-2">${totals[index]}</td>
                                    <td className="border px-4 py-2 cursor-pointer">
                                        <svg onClick={() => handledel(val)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='carttotal grid md:grid-cols-2  md:col-span-2 gap-5 p-10'>
                        <div>
                            <h1 className='text-xl font-bold'>Cart Total</h1>
                            <table className='w-[100%] mt-10'>
                                <tbody className='p-2'>
                                    <tr>
                                        <td className='border border-black px-4 py-2'>Cart Sub-total</td>
                                        <td className='border border-black px-4 py-2'>${subtotal}</td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black px-4 py-2'>Shipping</td>
                                        <td className='border border-black px-4 py-2'>Free Delivery</td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black px-4 py-2'>Coupons</td>
                                        <td className='border border-black px-4 py-2'>${discount}</td>
                                    </tr>

                                    <tr>
                                        <td className='border border-black px-4 py-2'>Game Coupons</td>
                                        <td className='border border-black px-4 py-2'>${Gamecoupons}</td>
                                    </tr>

                                    <tr>
                                        <td className='border border-black px-4 py-2'>Total</td>
                                        <td className='border border-black px-4 py-2'>${total}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={billing} className='copons__button bg-green-600 text-white px-4 py-2 mt-5 w-[40%] rounded hover:bg-white hover:text-black'>
                                Confirm order
                            </button>
                        </div>

                        <div className='flex  flex-col w-[100%] min-h-[30px] gap-4 mt-10 md:ml-10'>
                            <div>
                                <p>Apply Coupons: ZigZag143</p>
                            </div>
                            <div className='flex w-[100%] h-[30px] gap-4'>
                                <label>Coupons</label>
                                <input type="text" value={coupons} onChange={couponchange} className='border px-4 py-2' />
                            </div>
                            <button onClick={handlecoupons} className=' copons__button bg-green-400 text-black px-4 py-2 mt-2 w-[40%] rounded hover:bg-white hover:text-black'>
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    <div className='bg-green-700 mt-20 overflow-x-auto no-scrollbar'>
                        <div className='p-5 text-bold md:flex md:justify-center items-center gap-10'>
                            <div className='flex gap-10 items-center '>
                                <h1 className='text-white'>Game Coupons...............</h1>
                                <input value={gameinput} onChange={handlegameinput} className='focus:outline-none h-[30px]' />
                            </div>
                            <div className='mt-5 lg:mt-0 md:flex md:justify-center md:items-center'>
                                <button onClick={gamesubmit} className='bg-white p-2 hover:rounded-xl'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='mt-20'>
                <Fotter />
            </div>
        </div>
    );
}

export default Cards;
