
import StyleSign from "../styles/Newsign.module.css";
import Signimg from "../public/Images/signimg.jpg";
import faceicon from '../public/Images/facebookicon.png';
import twittericon from '../public/Images/twitter.png';
import googleicon from '../public/Images/googleicon.png';



import { useEffect, useRef, useState } from "react";

//Define interface for the data inputs
  interface inputs{
     fname:string,
     lname:string,
     email:string,
     pass:string,
 }

export default function Sign(){

   

       useEffect(() => {
        const storedTodos = localStorage.getItem('information');
        if (storedTodos) setdata(JSON.parse(storedTodos));
       },[])
        
         

  //Define States
  let[data,setdata] = useState<inputs[]>([]);
  let[message,setmessage] = useState<string>('');

  //Define refs
  let fnameref = useRef<HTMLInputElement>(null!);
  let lnameref = useRef<HTMLInputElement>(null!);
  let emailref = useRef<HTMLInputElement>(null!);
  let passref = useRef<HTMLInputElement>(null!);
  let conpassref = useRef<HTMLInputElement>(null!);

  //Define message states

  let[fnamemessage,setfnamemessage] = useState('');
  let[lnamemessage,setlnamemessage] = useState('');
  let[emailmessage,setemailmessage] = useState('');
  let[passmessage,setpassmessage] = useState('');
  let[compass,setcompass] = useState('');



    let senddata = (e:any) => {
        e.preventDefault()
        if(fnameref.current.value != '' && lnameref.current.value != '' &&
        emailref.current.value != '' && passref.current.value != '' && passref.current.value == conpassref.current.value && passref.current.value.length > 4){

            setdata([...data,{
                fname:fnameref.current.value,
                lname:lnameref.current.value,
                email:emailref.current.value,
                pass:passref.current.value,
            }])
            
            localStorage.setItem('userloged',emailref.current.value);
            window.location.assign('Main');

        }if(fnameref.current.value == ''){
            setfnamemessage('You must insert your first name')
        }else{
            setfnamemessage('')
        }
        
        if(lnameref.current.value == ''){
            setlnamemessage('You must insert your last name')
        }else{
            setfnamemessage('')
        }
        
        if(emailref.current.value == ''){
            setemailmessage('You must insert your email')
        }else{
            setemailmessage('')
        }
        
        if(passref.current.value == ''){
            setpassmessage('You must insert a password')
        }else{setpassmessage('')}
        
        if(passref.current.value != conpassref.current.value){
            setcompass('The passwords are not Identical')
        }else{
            setcompass('')
        }
    }


    useEffect(() => {
        localStorage.setItem('information',JSON.stringify(data)) 
       },[data])

    return(
     <div className={StyleSign.main}>

       <div className={StyleSign.insertinfo}>

         <div className={StyleSign.head}>
           <h2>Sign<span className={StyleSign.up}>UP</span></h2>
           <p>Welcome!please fill your information</p>
           <p className={StyleSign.message}>{message}</p>
          </div>
              
          <form className={StyleSign.inputs} onSubmit={senddata}>
               <input type="text" placeholder="first name"  ref = {fnameref}/>
               <div>{fnamemessage}</div>

               <input type="text" placeholder="last name"  ref = {lnameref} />
               <div>{lnamemessage}</div>

               <input type="email" placeholder="email"  ref = {emailref} />
               <div>{emailmessage}</div>

               <input type="password" placeholder="password"   ref = {passref} />
               <div>{passmessage}</div>

               <input type="password" placeholder="confirm password" ref={conpassref} />
               <div>{compass}</div>

               <button>Supmit</button>
          </form>

          <div className={StyleSign.line}></div>
          <p className={StyleSign.messageicon}>you can also signup with:</p>
          <div className={StyleSign.icons}>
            <img src={faceicon.src} />
            <img src={googleicon.src} />
            <img src={twittericon.src} />
            <a  href="Login">I have an account!</a>
          </div>
         </div>



       <div className={StyleSign.imgdiv}>
        <img src={Signimg.src} />
       </div>
             
              
        </div>
    )
}