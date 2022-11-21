import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate("/register")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                    </div>    
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary" onClick={() => handleOnclick()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}