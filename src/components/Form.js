
import '../App.css';
import Poke from "./images/poke.png";
import FromLogin from "./FormLogin";


function Form() {
  return (
    <div className="main">
     <div className='sub-main'>
       <div>
          <div className='imgs'>
            <div className='container-image'>
            <img src={Poke} alt="picture of charmander" className='poke'></img>
            </div>
            <div>
                <h1>Login Page</h1>
                <FromLogin />
            </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Form;
