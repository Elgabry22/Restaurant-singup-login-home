import StyleMenu from '../styles/Menu.module.css';
import burgerimg from '../public/Images/dish.jpg';
import burgerr from '../public/Images/burgerr.jpeg';
import pasta from '../public/Images/pasta.webp';
import lasagna from '../public/Images/lasagna.jpeg';
import cake from '../public/Images/cake.jpeg';
import spanshi from '../public/Images/spanshi.jpg';
import sandwitch from '../public/Images/sandwitch.jpeg';
import stars from '../public/Images/stars.png';







export default function Menu(){
    return(
        <div className={StyleMenu.main}>
           <h1>Our <span>Menu</span> </h1>
           
         
         <div className={StyleMenu.container}>
              
              <div>
               <div className={StyleMenu.imgdiv}> <img src={burgerr.src} /></div>  
                <h5>Burger</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$20.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>
             
              <div>
               <div className={StyleMenu.imgdiv}> <img src={pasta.src} /></div>  
                <h5>Pasta</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$30.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={lasagna.src} /></div>  
                <h5>lasagna</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$40.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={cake.src} /></div>  
                <h5>Cake</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$60.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={spanshi.src} /></div>  
                <h5>Spanchi</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$60.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={sandwitch.src} /></div>  
                <h5>Sandwich</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$30.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={cake.src} /></div>  
                <h5>Cake</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$60.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>

              <div>
               <div className={StyleMenu.imgdiv}> <img src={burgerimg.src} /></div>  
                <h5>Biryani</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis aliquam 
                ipsa  ut accusantium.</p>
                <h6>$100.00</h6>
                <img  src={stars.src} className={StyleMenu.stars}/>
                <button>Order now</button>
              </div>
              

         </div>  
        </div>
    )
}