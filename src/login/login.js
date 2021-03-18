
import './login.css'

function Login() {

    return(
        <div className="maincontainer" >
            {/* <nav className="navbar">Brown's Fitness Arena</nav> */}
           
            <form >
                 <div className="topcontainer"> 
                 <h3 className="hc">Welcome to Brown's Fitness Arena</h3>
                 <span className="sc">Sign-up to Manage your own appearance</span>
                 </div>
                    <div className="downcontainer">
                     <div className="formpicture">

                 </div>
                    <div className="forminputs">
                            <label className="Firstname">Firstname</label>
                        <input id="Firstname" type="text" placeholder="Gideon" className="myinputfields"></input>
                            <label className="Lastname">Lastname</label>
                        <input id="Lastname" type="text" placeholder="Brown" className="myinputfields"></input>
                            <label className="Username">Username</label>
                        <input id="Username" type="text" placeholder="Ogidibrown3136" className="myinputfields"></input>
                            <label className="Password">Password</label>
                        <input id="password" type="password" placeholder="Password" className="myinputfields" ></input>
                            <label className="Confirm Password">Confirm Password</label>
                        <input id="password" type="password" placeholder="Confirm Password" className="myinputfields" ></input>
                            <label className="E-mail">E-mail</label>
                        <input id="email" type="mail" placeholder="gideonbrown@gmail.com" className="myinputfields"></input>


                    </div>
                 <div className="formbutton">
                    <button className="formbuttonbutton">
                        Sign Up
                    </button>

                </div>
                </div>

                <footer>
                    <div>
                        <h6>Already have an account?
                             <a href="https://www.google.com">Login</a>
                        </h6>
                    </div>
                    
                </footer>

        
             </form>
        </div>

    )
}

export default Login;