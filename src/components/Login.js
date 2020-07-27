import React from 'react'

export default function Login() {
    return (
        <div>
            <form>
                <label>
                    User Name or Email:
                    <input type="text" name="user" />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                <button>Clear</button>
            </form>
            <h3>Need an Account?</h3>
            <a href="/register">Sign-up</a>
        </div>
    )
}