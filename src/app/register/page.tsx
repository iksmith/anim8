'use client'

import Input from "../components/input/Input"
import { useState } from "react"


interface initialStateProps {
    name: string,
    email: string,
    password: string

}

const initialState:initialStateProps = {
    name: '',
    email: '',
    password: ''
}



export default function page() {
    const [state, setState] = useState(initialState)

    function handleChange(e:any) {
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
        <div className="registerWrapper">
            <form action="" className="formBox">
                <div className="innerForm">
                    <Input placeholder="Full Name" name='name' id="name" type='text' onChange={handleChange} value={state.name} />
                    <Input placeholder="Email" name='email' id="email" type='email' onChange={handleChange} value={state.email} />
                    <Input placeholder="Password" name='password' id="password" type='password' onChange={handleChange} value={state.password} />
                </div>
            </form>
        </div>
    )
}