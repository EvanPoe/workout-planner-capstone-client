import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Home extends Component {

    render() {
        return (
            <div className="welcome-page">

                <header>
                    <h2 className="welcome-header">Welcome to Your Workout Planner!</h2>
                </header>

                <section className="login-form">
                    <fieldset className="welcome-fieldset">
                        <h3 className="welcome-message">A customized workout just for you is only a few clicks away!</h3>
                        <label htmlFor="get-started">Let's Get Started!</label>
                        <NavLink to='/Login'>Login</NavLink>
                        <NavLink to='/Signup'>New User? Create an Account Here...</NavLink>
                        {/* <input name="get-started" type="submit" value="Log In" />
                        <a href="/">New User? Create an Account Here...</a> */}
                    </fieldset>
                </section>

                <section id="example-section">
                    <header className="example-header">What to Expect</header>
                    <h3 className="example-title">Beginner Workout</h3>
                    <h4 className="example-type">Upper Body</h4>
                    <ul className="example-list">
                        <li>
                        <h5>Pushups</h5>
                        <img className="pushup-image" alt="pushup" src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p>Pushups are a great exercise for your chest, shoulders, and arms</p>
                        </li>
                    </ul>
                </section>

            </div>
        );
    }
}

export default Home;