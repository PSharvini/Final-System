import React, {Component} from 'react';
import Home from "./Home";
import ReactDOM from 'react-dom';
class Login extends Component {
    constructor() {
        super();

        this.state = {
            username : '' ,
            password: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {

        this.setState({
            username: event.target.value
        }, () => {
            console.log("Entered Username: ", this.state.username);
        });
    };

    handlePasswordChange(event) {

        this.setState({
            password: event.target.value
        }, () => {
            console.log("Entered password: ", this.state.password);
        });
    };

    login = (event) => {
        if(this.state.username == "Admin" && this.state.password == "Admin123"){
            localStorage.setItem("UN", "Admin");
            ReactDOM.render(
                <React.StrictMode>
                    <Home />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
        else{
            alert("Invalid Username or Password");
        }
    }
    render() {
        return (
            <div>
                <div className="shadow-lg mb-5 bg-white wdth rounded mx-auto  my-4">
                    <div className="bg-secondary text-white">
                        <h1 className="text-center"><i className="fas fa-user-circle"></i></h1>
                        <h1 className="text-center p-1">Log In</h1>
                    </div>
                    <h6>
                        <div className="form-group p-2">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" onChange={this.handleUsernameChange}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group p-2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={this.handlePasswordChange}/>
                        </div>

                        <button  className="btn btn-primary my-2 mx-2" name="login" onClick={this.login}>Log In</button>


                    </h6>

                </div>
            </div>
        );
    }
}

export default Login;