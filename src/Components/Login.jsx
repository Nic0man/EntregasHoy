import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const Login = () => {
    const [state, setState]  = useState({
        username:"",
        password:""
    });

    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate("/register");
    };

    const handleOnChange = (value, atributte) =>{
        //console.log("look => ", event.target.value);
        const copyState = {...state};
        copyState[atributte] = value;
        console.log("look => ", copyState);
        setState(copyState);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        defaultValue = {state.username}/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1"
                        value = {state.password}
                        onChange = {(event) => handleOnChange(event.target.value, "password")}/>
                    </div>    
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary" onClick={() => handleOnclick()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}