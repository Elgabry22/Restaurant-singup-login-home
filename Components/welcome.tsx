import Welocmestyle from "../styles/Welcome.module.css";
import burgerimg from "../public/Images/burger.png";
import { useEffect, useState } from "react";

export default function Welcome(){

    
    //Define states
    let[show,setshow] = useState(false);
    let[emailin,setemailin] = useState<any>();


    useEffect(() => {
        setemailin(localStorage.userloged);
    },[])

    return(
        <div className={Welocmestyle.main}>

               <div className={Welocmestyle.email}> {emailin} </div> 
               
           <div className={Welocmestyle.content}>
            <h1>Good food <span className={Welocmestyle.choices}>choices</span> <br></br> are good <br></br>
             <span className={Welocmestyle.invetment}>investments</span>. </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> Etiam et purus a odio finibus bibendum
             amet leo.</p>

            <button className={Welocmestyle.orderbtn} >Order now</button>  <button className={Welocmestyle.learnbtn}>Learn more</button>
             
           </div>

           
           <div className={Welocmestyle.imgdiv}> <img src={burgerimg.src} /> </div>

        </div>
    )
}