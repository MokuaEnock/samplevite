import { useState } from "react"

export default function Login() {
    let [email, setEmail] = useState("")
    let [name, setName] = useState("")
    let [first, setFirst] = useState("")
    let [second, setSecond] = useState("")

    return <main id="login">
        <form id="form1">
            <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>

        </form>

        <form id="form2">
            <input type="number" placeholder="Number 1" value={first} onChange={e => setFirst(e.target.value)} />
            <input type="number" placeholder="Number 1" value={second} onChange={e => setSecond(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </main>
}
