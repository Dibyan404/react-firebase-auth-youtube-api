import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import fire from '../Config/fire';

class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:'',
            passsword:''
        }
        
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error)=>{
            console.log(error);
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {console.log(error)});
    }
    handleChange(e){
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className = "login">
                <div className = "col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        {/* <div className="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                        <button type="submit" onClick={this.signup} style = {{marginLeft:'25px'}} className="btn btn-success">Signup</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;
