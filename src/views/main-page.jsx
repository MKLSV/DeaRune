import bgImg from '../assets/imgs/main.jpg'

export function MainPage() {

    return (
        <div className="main-page" id="home">
            <img className='main-img' src={bgImg}/>
            <div className='main-content'>
                <div className='text-container'>
                    <h1>
                        Узнай, что мир подготовил тебе, еще до твоего рождения</h1>

                    <h2>
                        Окунись в программу своей жизни и подстрой ее под себя!
                        Узнав в подробностях кто ты и каковы твои задачи – ты сможешь управлять миром, и получить все желаемые события!
                    </h2>

                </div>
                <a href='https://t.me/dea_rune' target="_blank">
                    <button className='consul first-btn'>Консультация</button>
                </a>
            </div>

        </div>
    )
}