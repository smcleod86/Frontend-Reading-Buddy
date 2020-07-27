import React from 'react'

export default function Register() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br></br>
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
            <label>
                Re-enter Password:
                <input type="password" name="password" />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
            <button>Clear</button>
            <p>Sign-up</p>
        </form>
    )
}