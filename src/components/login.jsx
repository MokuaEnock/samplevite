import { useState } from "react"

export default function Login() {
    let [email, setEmail] = useState("")
    let [name, setName] = useState("")
    let [first, setFirst] = useState("")
    let [second, setSecond] = useState("")
    let [id, setId] = useState('')

    function handleOne(e) {
        e.preventDefault()
        let data = {
            email, name
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => setId(data.id))
        console.log(id)
    }

    function handleTwo(e) {
        e.preventDefault()
        // console.log(email, name)
        let data = {
            user_id: id, first, second
        }
        fetch("http://localhost:3000/numbers", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => console.log(data))
    }

    function handleTwo(e) {
        e.preventDefault()
        console.log(first, second)
    }
    return <main id="login">
        <form id="form1" onSubmit={handleOne}>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

        <form id="form2" onSubmit={handleTwo}>
            <input type="number" placeholder="Number 1" value={first} onChange={e => setFirst(e.target.value)} />
            <input type="number" placeholder="Number 1" value={second} onChange={e => setSecond(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </main>
}
