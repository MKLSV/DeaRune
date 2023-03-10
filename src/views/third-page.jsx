import goodImg from '../assets/imgs/good.png'
import badImg from '../assets/imgs/bad.jpg'

export function ThirdPage() {
    return (
        <div className="third-page" id="numerologia">
            <div className="third-page-container">
                <h1>Так что такое регрессивная нумерология</h1>
                <h2>Регрессивная нумерология – это матрица нашего жизненного пути, которая содержит в себе:
                    Наши характеристики, Наши таланты, Жизненные задачи, Кармические нельзя, Предназначение, Кем мы должны стать.</h2>
                <h2>У нас есть два сценария, два пути:</h2>

                <div className="carts-container">
                    <div className="cart">
                        <img src={badImg} />
                        <div className='text-container bad'>
                            <h2>Если идти по минусовому направлению</h2>
                            <h3>То жизненный сценарий смещается в негативное русло и в неприятные события.</h3>
                        </div>
                    </div>

                    <div className="cart second">
                        <img src={goodImg} />
                        <div className='text-container good'>
                            <h2>Если идти по плюсовому направлению</h2>
                            <h3>То сценарий смещается в позитивное русло и хорошие события.</h3>
                        </div>
                    </div>
                </div>
                <div className='third-page-footer'>
                    <h3>
                        Нумерология позволяет узнать как плюсовое направление чтобы понять как и куда двигатся, так и минусавое направление, что бы понять чего вам катигорически нельзя делать, позволяет составлять долгосрочные прогнозы и даёт ответы на все волнующие вопросы
                    </h3>

                    <h3>
                        Матрица Жизненного Пути - это книга судьбы человека, основанная на его дате рождения. В это сложно поверить, но вся твоя жизнь прописана в твоей матрице и зная как ее расшифровать можно найти ответы на множество вопросов.
                    </h3>
                </div>
            </div>
        </div>
    )
}