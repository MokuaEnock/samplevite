import { useState } from "react"

export default function Login() {
    let [email, setEmail] = useState("")
    let [name, setName] = useState("")
    let [first, setFirst] = useState("")
    let [second, setSecond] = useState("")

    return <main id="login">
        <form id="form1">
            <input type="email" placeholder="email" />
            <input type="text" placeholder="name" />
            <button type="submit">Submit</button>

        </form>

        <form id="form2">
            <input type="number" placeholder="Number 1" />
            <input type="number" placeholder="Number 1" />
            <button type="submit">Submit</button>
        </form>
    </main>
}
