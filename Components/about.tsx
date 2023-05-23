import StyleAbout from '../styles/About.module.css';
import dishimg from '../public/Images/dish.png';
import rightarrow from '../public/Images/rightarrow.png';

export default function About(){
    return(
        <div className={StyleAbout.main}>

           <div className={StyleAbout.content}>
                <h1> <span>About </span> Us</h1>
                <h2>Why choose Us ?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam. <br></br> reiciendis aliquid. Ipsa, id omnis a 
                    periam qui debitis voluptates inventore.<br></br> hic odit aspernatur, ad laboriosam, cupiditate 
                    illo mollitia reprehenderit amet <br></br> quibusdam.periam qui debitis voluptates inventore?
                </p>

                <button>Exlorer Now <img src={rightarrow.src} /></button>
            </div>  



            <div className={StyleAbout.imgdiv}>
              <img src={dishimg.src} />
            </div>
              
        </div>
    )
}