
import {useState} from 'react';
import '../App.css';

        
const FromLogin = ()=>{
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword]= useState(""); 
    const [passwordError, setPasswordError] = useState("");

    const [successmsg, setSuccessmsg] = useState(""); 

    const handelEmailChange =(e)=>{
        setSuccessmsg("");
        setEmailError("");
        setEmail(e.target.value);
    }
    const handelPasswordChange =(e)=>{
        setSuccessmsg("");  
        setPasswordError("");
        setPassword(e.target.value);
    }
    const handelFormSubmit =(e)=>{
        e.preventDefault();

        if(email !==''){
            const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
            if(emailRegex.test(email)){
                setEmailError('');
                if (email === 'admin@demo.com'){
                    setEmailError('');
                    if(password === 'demo'){
                        setSuccessmsg('You are successfully loggrd in ');
                    }else{
                        setEmailError('Password does not match with the email address');
                    }

                }
                else{
                    setEmailError('Email does not match with our database');
                }
                
             } else{
                setEmailError('Invalid Email')
            }
        }
        else{
            setEmailError('Email Required');
        }
        if (password !==''){

        }
        else{
            setPasswordError('Password Required');
        }
    }

    return (
        <div className='wrapper'>
            <form className='form-group form' autoComplete='off'
            onSubmit={handelFormSubmit}>
                {successmsg&&<div className='success-msg'>{successmsg}</div>}

                <lable>Email</lable>
                <input type="email" className='form-control custom-input' placeholder=' Enter Email'
                onChange={handelEmailChange} value={email}/><br></br>
                {emailError&&<div className='error-msg'>{emailError}</div>}

                <lable>password</lable>
                <input type="password" className='form-control custom-inputt' placeholder='enter password'
                onChange={handelPasswordChange} value={password}/><br></br>
                {passwordError&&<div className='error-msg'>{passwordError}</div>}

                <button type='submit' className='btn btn-success btn-lg'>Login</button>
            </form>
            

        </div>
    )
}
   
        
        
export default FromLogin; 
         