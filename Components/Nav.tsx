import StyleNav from '../styles/Nav.module.css';
import logoimg from '../public/Images/logo.png';
import loupeimg from '../public/Images/loupe.png';
import cartimg from '../public/Images/cart.png';
import likeimg from '../public/Images/like.png';
import menuimg from '../public/Images/menu (1).png';
import { useRef, useState } from 'react';



export default function Nav(){

    //Define States
    let [btnstate,setbtnstate] = useState(false);

    let navigationref = useRef<HTMLUListElement>(null!);

    let open = () => {
        setbtnstate(btnstate => !btnstate);
    }

    let togglenav = btnstate ? 'navigation' : 'hidden';

     return(
        
        <div className={StyleNav.navbar}>
              
             <p>Food</p>
                      
             <ul className={StyleNav.ulist}>
                <li> <a href=''>Home</a> </li>
                <li> <a href=''>About</a> </li>
                <li> <a href=''>Gallery</a> </li>
                <li> <a href=''>Menu</a> </li>
                <li> <a href=''>Review</a> </li>
                <li> <a href=''>Order</a> </li>
             </ul>

             <div className={StyleNav.icons}>
                <img src={loupeimg.src} />
                <img src={likeimg.src} />
                <img src={cartimg.src} />
                
             </div>
             <img className={StyleNav.menu} src={menuimg.src} onClick={open}/>

            <ul className={togglenav} ref = {navigationref}>
                <li> <a href=''>Home</a> </li>
                <li> <a href=''>About</a> </li>
                <li> <a href=''>Gallery</a> </li>
                <li> <a href=''>Menu</a> </li>
                <li> <a href=''>Review</a> </li>
                <li> <a href=''>Order</a> </li>
            </ul>



        </div>
     )
}