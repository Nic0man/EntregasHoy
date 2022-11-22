
export const Plantilla = () => {

    return(
        <div className="container">
            <div className="frame">
                <div className="nav">
                <ul className="links">
                    <li className="signin-active"><a className="btn">Sign in</a></li>
                    <li className="signup-inactive"><a className="btn">Sign up </a></li>
                </ul>
                </div>
                <div>
                    <form className="form-signin" action="" method="post" name="form">
                        <label htmlFor="username">Username</label>
                        <input className="form-styling" type="text" name="username" placeholder=""/>
                        <label htmlFor="password">Password</label>
                        <input className="form-styling" type="text" name="password" placeholder=""/>
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox" ><span className="ui"></span>Keep me signed in</label>
                        <div className="btn-animate">
                            <a className="btn-signin">Sign in</a>
                        </div>
                    </form>
                        
                    <form className="form-signup" action="" method="post" name="form">
                        <label htmlFor="fullname">Full name</label>
                        <input className="form-styling" type="text" name="fullname" placeholder=""/>
                        <label htmlFor="email">Email</label>
                        <input className="form-styling" type="text" name="email" placeholder=""/>
                        <label htmlFor="password">Password</label>
                        <input className="form-styling" type="text" name="password" placeholder=""/>
                        <label htmlFor="confirmpassword">Confirm password</label>
                        <input className="form-styling" type="text" name="confirmpassword" placeholder=""/>
                        <a ng-click="checked = !checked" className="btn-signup">Sign Up</a>
                    </form>
                
                        
                </div>
                
                <div className="forgot">
                    <a href="#">Forgot your password?</a>
                </div>
                
                <div>
                    <div className="cover-photo"></div>
                    <div className="profile-photo"></div>
                    <h1 className="welcome">Welcome, Chris</h1>
                    <a className="btn-goback" value="Refresh">Go back</a>
                </div>
            </div>
        </div>
    )
}