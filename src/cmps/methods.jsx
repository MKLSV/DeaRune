
export function Methods({ item, i, setCurrentOpen, currentOpen}) {


    const onToggle = () => {
        currentOpen === i ? setCurrentOpen(null) : setCurrentOpen(i)
      }

    return (
        <div className={i === 0 ? "first container" : "container"} onClick={onToggle}>
            <section className="title">
                <span>{item.title}</span>
                <span>{currentOpen === i ? "-" : "+"}</span>
            </section>
            <section className={`block ${currentOpen === i ? 'open' : 'closed'}`}>
                <span>{item.txt}</span>
            </section>
        </div>
    )
}