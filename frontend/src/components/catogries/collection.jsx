
import { useNavigate } from "react-router-dom";
import Fotter from "../fotter";
function Collection(props) {
    const { products, setsc, sc, tilename } = props;
    const navigate=useNavigate()
    function saveToCart(id) {
        const newProduct = products.filter(function (item) {
            if (id.id === item.id) {
                return true;
            } else {
                return false;
            }
        });

        // Update the shopping cart with the new product
        setsc([...sc, ...newProduct]);


    }
    function ownimage(event){
       
        navigate('/Oneimagepage',{state:{Details:event}})

    }



    return (
        <div>
            <h1 className='pantname text-center p-5 text-3xl bg-gradient-to-r from-green-400 to-blue-500 overflow-x-auto no-scrollbar'>{tilename}</h1>
            <div className="flex justify-center ">
                <div className='pantbox mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 overflow-x-auto no-scrollbar'>
                    {products.map((item, index) => (
                        <div key={index}>
                            <div className='pantbox__img border-4 border-black p-2 max-w-[200px] min-h-[280px] relative flex flex-col gap-5' >
                                <div onClick={()=>ownimage(item)}>
                                    <img src={item.image} className='pantbox__img1 min-w-full min-h-150px' alt={item.name} />
                                </div>
                                <div>
                                    <h1>{item.style}</h1>
                                    <h1 className="font-bold">${item.rupees}</h1>
                                    <h1>{item.Delivery}</h1>
                                    <h1 className= "text-red-400">{item.Rating}⭐⭐</h1>
                                </div>
                                <div onClick={() => saveToCart(item)} className='pantbox__sc absolute bottom-5 right-2 bg-red-300 p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Fotter></Fotter>
        </div>
    );
}

export default Collection;
