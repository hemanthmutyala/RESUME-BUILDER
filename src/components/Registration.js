import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hemanthSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hemanthSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Developer Info</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Choose your Profession</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option>Developer</option>
                        <option>Artist</option>
                        <option>Photographer</option>
                        <option>Team Player</option>
                        <option>Full Stack</option>
                    </Form.Control>
                </div>


                <button type="submit" className="btn btn-primary">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    <p><strong>Developer Info:</strong> Hemanth Venkata Sai Mutyala</p>
                    <p><strong>Address:</strong> 249 Senator Pl</p>
                    <p><strong>Phone:</strong> 5133561586</p>
                    <p><strong>Email:</strong> hemanthmutyala8@gmail.com</p>
                </div>}
        </>
    )
}

export default Registration
