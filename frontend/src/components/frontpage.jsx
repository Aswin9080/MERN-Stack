import Navbar from '../components/navbar';
import Profile from '../components/profile';
import Menus from './catogries/menus';
import Mostpopular from './mostpopular/mostpopuar';
import { OfferZone } from './offers';
import Fotter from './fotter';
import HDTTData from './HDTT/hdttdata';
function Frontpage(props) {
    const randcoupon = props.randcoupon;
    const setrandcoupon = props.setrandcoupon;
    console.log('front', randcoupon)
    return (
        <div>
            <Navbar></Navbar>
            <Menus></Menus>
            <Profile></Profile>
            <Mostpopular></Mostpopular>
            <OfferZone randcoupon={randcoupon} setrandcoupon={setrandcoupon}></OfferZone>
            <HDTTData></HDTTData>
            <div className='mt-20'>
                <Fotter></Fotter>
            </div>
        </div>
    )
}

export default Frontpage
