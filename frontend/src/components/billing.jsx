import Navbar from "./navbar";
import Fotter from "./fotter";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
function Billing(props) {
    const data=useLocation()
    const copons=data.state.discount
    const Gamecoupons=data.state.Gamecoupons

    
    console.log('billi',copons)
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        email: ''
    });
    const [errorField, setErrorField] = useState('');

    const sc = props.sc;

    // Calculate total cost of all products
    const a = sc.reduce((acc, item) => acc + (item.rupees * Number(item.quantity)), 0);
    const totalCost =a-copons-Gamecoupons
   // console.log(totalCost)
    // You can replace this with your shipping cost logic

    function handleBack() {
        navigate('/Frontpage');
    }

    function handlePlaceOrder() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.(?:com)$/;

        const mobileRegex = /^\d{10}$/;

        if (totalCost === 0) {
            alert("First Purchase Your Item")
        }
        else {
            //Validation checks
            if (inputFields.name.trim() === '') {
                alert('Please fill the Name 😀');

            } else if (inputFields.address.trim() === '') {
                alert('Please fill the address 🏛️');
            } else if (inputFields.city.trim() === '') {
                alert('Please fill the city 🌃');
            } else if (inputFields.country.trim() === '') {
                alert('Please fill the country 🌍');
            } else if (!mobileRegex.test(inputFields.phone)) {
                alert('Please check the number 📞');

            } else if (!emailRegex.test(inputFields.email)) {
                alert('Please check the  email 📩');
            } else {
                // Place order logic goes here
                //console.log(inputFields.email)
                axios.post('http://localhost:5000/sendmail', { mail: inputFields.email }).
                    then(function (data) {
                        window.confirm('Order placed successfully!')
                    }).catch(function (data) {
                        console.log('error')
                    })
                //console.log("Order placed successfully!");
            }
        }

    }

    function handleDetailsChange(event) {
        const { name, value } = event.target;
        setInputFields(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Reset error field when input changes
        setErrorField('');
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-300 flex items-center p-4 gap-2 cursor-pointer" onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-4">
                    <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <h1 className="text-xl font-bold">back</h1>
            </div>
            <div className="billing grid lg:grid-cols-2 lg:gap-10 lg:max-h-[500px] overflow-y-auto no-scrollbar">
                <div className="billing--header flex flex-col gap-5">
                    <h1 className="text-xl">Billing Details</h1>
                    <div className="billing--details flex flex-col gap-4">
                        <input type='text' name="name" placeholder="Name" value={inputFields.name} onChange={handleDetailsChange} className={errorField === 'name' ? 'error' : ''}></input>
                        <input type='text' name="address" placeholder="Address" value={inputFields.address} onChange={handleDetailsChange} className={errorField === 'address' ? 'error' : ''}></input>
                        <input type='text' name="city" placeholder="City" value={inputFields.city} onChange={handleDetailsChange} className={errorField === 'city' ? 'error' : ''}></input>
                        <input type='text' name="country" placeholder="Country" value={inputFields.country} onChange={handleDetailsChange} className={errorField === 'country' ? 'error' : ''}></input>
                        <input type='number' name="phone" placeholder="Phone" value={inputFields.phone} onChange={handleDetailsChange} className={errorField === 'phone' ? 'error' : ''}></input>
                        <input type='email' name="email" placeholder="Email" value={inputFields.email} onChange={handleDetailsChange} className={errorField === 'email' ? 'error' : ''}></input>
                    </div>
                    <h1>Additional Information</h1>
                    <textarea type='text' placeholder="Order notes" className="billing--notes resize-none"></textarea>
                </div>

                <div className="overflow-x-auto border mt-10">
                    <table className="w-full">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-4 py-2">Product Image</th>
                                <th className="px-4 py-2">Product Name</th>
                                <th className="px-4 py-2">Cost</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sc.map(function (items, index) {
                                return (
                                    <tr key={index}>
                                        <td className="border px-4 py-2"><img src={items.image} className='w-[100px] m-auto' alt="productimage" /></td>
                                        <td className="border px-4 py-2">{items.style + ' x ' + items.quantity}</td>
                                        <td className="border px-4 py-2">${items.rupees * Number(items.quantity)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan="2" className="border px-28 py-2">Shipping</td>
                                <td className="border px-4 py-2">Free Delivery</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="border px-28 py-2 mr-14">Coupons</td>
                                <td className="border px-4 py-2">${copons}</td>
                            </tr>

                            <tr>
                                <td colSpan="2" className="border px-28 py-2 mr-14">Game Coupons</td>
                                <td className="border px-4 py-2">${Gamecoupons}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="border px-28 py-2 mr-14">Total Cost</td>
                                <td className="border px-4 py-2">${totalCost}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <form className="p-5">
                        <div className="flex gap-5">
                            <input type="radio" name="paymentMethod" value="cod"></input>
                            <label>Cash on delivery</label>
                        </div>

                        <div className="flex gap-5">
                            <input type="radio" name="paymentMethod" value="NB"></input>
                            <label>Net Banking</label>
                        </div>

                        <div className="flex gap-5">
                            <input type="radio" name="paymentMethod" value="DO"></input>
                            <label>Debit card</label>
                        </div>

                        <div className="flex gap-5">
                            <input type="radio" name="paymentMethod" value="CC"></input>
                            <label>Credit card</label>
                        </div>
                    </form>

                    <div className="flex gap-5 p-5">
                        <button onClick={handlePlaceOrder} className='copons__button bg-green-300 text-black px-4 py-2 mt-2 w-[40%] rounded hover:bg-white hover:text-black'>
                            Place Order
                        </button>
                    </div>

                </div>
            </div>
            <div className='mt-20'>
                <Fotter />
            </div>
        </div>
    );
}

export default Billing;
