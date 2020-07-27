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
            <p>Sign-up</p>
        </div>
    )
}