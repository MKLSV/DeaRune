import { useState } from "react"


export function Methods({ item, i }) {

    const [userSwitch, switchIsOpen] = useState(false)

    function onToggle() {
        switchIsOpen(!userSwitch)
    }

    return (
        <div className={i == 0 ? "first container" : "container"} onClick={onToggle}>
            <section className="title">
                <span>{item.title}</span>
                <span>{userSwitch ? "-" : "+"}</span>
            </section>
            <section className={userSwitch ? "text" : "text hide"}>
                <span>{item.txt}</span>
            </section>
        </div>
    )
}