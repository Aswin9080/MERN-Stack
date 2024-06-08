import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Menus from "./catogries/menus";
import Fotter from './fotter';

function OneImagePage(data) {
    const app = useLocation(data);
    const details = app.state.Details;

    return (
        <div>
            <Navbar></Navbar>
            <Menus></Menus>
            <div className="flex justify-center mt-10 overflow-x-auto no-scrollbar">
                <div className="md:grid md:grid-cols-2 gap-10 mb-20">
                    <div className="ownimage__smallimg p-10">
                        <img className="w-full  lg:min-h-[500px]" src={details.image} alt={details.style} />
                        <h1 className="text-xl font-bold mt-4">5 Similar Product</h1>
                        <div className="h-[50px] max-w-[260px] gap-1 flex mt-4 overflow-x-auto no-scrollbar">
                            <img src={details.image} alt={details.style} className="h-full" />
                            <img src={details.image} alt={details.style} className="h-full" />
                            <img src={details.image} alt={details.style} className="h-full" />
                            <img src={details.image} alt={details.style} className="h-full" />
                            <img src={details.image} alt={details.style} className="h-full" />
                        </div>
                    </div>

                    <div className="mt-10 ml-10 mr-10 lg:mt-0">
                        <div className="ownimage__bigimg p-3">
                            <h1>{details.style}</h1>
                            <h1>${details.rupees}</h1>
                            <h1 className="bg-green-400 inline-block p-1 rounded">{details.Rating}⭐⭐</h1>
                            <h1>{details.Delivery}......</h1>
                        </div>

                        <div className="ownimage__bigimg mt-10 p-3 ">
                            <h1 className="font-bold">Select Size</h1>
                            <div className="flex gap-3 mt-3 ">
                                <h1 className="bg-green-400 p-1 rounded cursor-pointer"><a>M</a></h1>
                                <h1 className="bg-green-400 p-1 rounded cursor-pointer">L</h1>
                                <h1 className="bg-green-400 p-1 rounded cursor-pointer">XL</h1>
                            </div>
                        </div>

                        <div className="ownimage__bigimg mt-10 p-3 ">
                            <h1 className="font-bold">product deatils</h1>
                            <div className="opacity-[0.8]">
                                <h1>{details.style}</h1>
                                <h1>Size:Free Size</h1>
                                <h1>Country of Origin : India</h1>
                            </div>
                        </div>

                        <div className="ownimage__bigimg mt-10 p-3 w-[70%]">
                            <h1 className="font-bold">Sold By</h1>
                            <div className="flex gap-3 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                                <h1>ZigZag Shop</h1>
                            </div>

                            <div className="flex justify-between mt-5">
                                <div>
                                    <button>{details.Rating}</button>
                                    <p>13,532</p>
                                </div>

                                <div>
                                    <h1>205</h1>
                                    <p>Followers</p>
                                </div>

                                <div>
                                    <h1>59</h1>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Fotter></Fotter> 
            </div>

        </div>
    );
}

export default OneImagePage;
