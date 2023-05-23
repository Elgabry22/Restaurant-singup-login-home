import { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import StyleSign from "../styles/Login.module.css";
import Signimg from "../public/Images/signimg.jpg";
import faceicon from '../public/Images/facebookicon.png';
import twittericon from '../public/Images/twitter.png';
import googleicon from '../public/Images/googleicon.png';



interface inputs{
    fname:string,
    lname:string,
    email:string,
    pass:string,
}


export default function Login(){

    //Define Refs

    let emailref = useRef<HTMLInputElement>(null!)
    let passref = useRef<HTMLInputElement>(null!)

    //Define states
    let[data,setdata] = useState<inputs[]>([])
    let[user,setuser] = useState<any>()
    let[passmessage,setpassmessage] = useState<string>();
    let[emailmessage,setemailmessage] = useState<string>();


    useEffect(() => {
        if(localStorage.information != null){
           setdata(JSON.parse(localStorage.information))
        }
    },[])

    let datashow;

    let login = (e:any) => {
       e.preventDefault()
       if(emailref.current.value != '' &&  passref.current.value != ''){
        data.map((res,i) => {
            if(data[i].email == emailref.current.value &&  data[i].pass == passref.current.value){
                window.location.assign('Main');
                setuser(data[i].email)
        }
        })

       }if(emailref.current.value == ''){
          setemailmessage('You must insert your email')
       }else{
          setemailmessage('')
       }
       
       if(passref.current.value == ''){
        setpassmessage('You must insert your passwword')
      }else{
        setpassmessage('')
      }
    }
    
    useEffect(() => {
        localStorage.setItem('userloged',user);
    })

    
    return(
       
    
   <div className={StyleSign.main}>

    <div className={StyleSign.insertinfo}>

     <div className={StyleSign.head}>
      <h2>Log<span className={StyleSign.in}>in</span></h2>
      <p>Welcome!please fill your information</p>
     </div>
       
    <form className={StyleSign.inputs} onSubmit={login}>
        
        <input type="email" placeholder="email"  ref = {emailref} />
        <div>{emailmessage}</div>

        <input type="password" placeholder="password"   ref = {passref} />
        <div>{passmessage}</div>
        
        
        <button>Supmit</button>
     </form>

      <div className={StyleSign.line}></div>
       <p className={StyleSign.messageicon}>you can also signup with:</p>
       <div className={StyleSign.icons}>
           <img src={faceicon.src} />
           <img src={googleicon.src} />
           <img src={twittericon.src} />
           <a href="sign">I don't have an account!</a>
        </div>
      </div>



                  <div className={StyleSign.imgdiv}>
                    <img src={Signimg.src} />
                   </div>
                   
</div>

)
}