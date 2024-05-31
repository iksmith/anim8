'use client'

import axios from "axios"
import Input from "../components/input/Input"
import { FormEvent, useState } from "react"
import router from "next/router"


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

    const onSubmit = (event:FormEvent) => {
        event.preventDefault()
        axios.post('/api/register', state)
        .then(()=> {
            router.reload()
        })
        .then(() => {
            setTimeout(() => {
                router.push('/login')
            }, 2500)
        })
        .catch((err:any) => {
            console.log(err)
        })
        .finally(() => {

        });
    }

    return (
        <div className="registerWrapper">
            <form action="" className="formBox" onSubmit={onSubmit}>
                <div className="innerForm">
                    <Input placeholder="Full Name" name='name' id="name" type='text' onChange={handleChange} value={state.name} />
                    <Input placeholder="Email" name='email' id="email" type='email' onChange={handleChange} value={state.email} />
                    <Input placeholder="Password" name='password' id="password" type='password' onChange={handleChange} value={state.password} />
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    )
}