import { Sale } from '../cmps/sale'


export function AnlsAbout() {
    return (
        <div className="anls-about-page" id="method">
            <h1>Как проходит разбор</h1>

            <div className="anls-about-container">
                <img className='img1' src={require("../assets/imgs/anls1.jpg")} />
                <section className='info1'>
                    <h2 className='title'>
                        Первый этап
                    </h2>
                    <h3 className='txt'>
                        Вы присылаете данные, дату рождения и вопрос который вас волнует, вы получаете полный разбор всей вашей матрицы, но в матрице зашифровано очень много информации и чтобы понимать на чем сосредоточится желательно задать конкретный вопрос на который вы хотите найти ответ
                    </h3>
                </section>
                <section className='info2'>
                    <h2 className='title'>
                        Сбор информации
                    </h2>
                    <h3 className='txt'>
                        По вашим данным я буду собирать и разбирать информацию, как уже сказано выше в матрице зашифровано очень много информации, поэтому на сбор информации уходит давольно много времени, далее все редактируется и конвертируется в PDF файл  </h3>
                </section>
                <img className='img2' src={require("../assets/imgs/anls2.jpg")} />
                <img className='img3' src={require("../assets/imgs/anls3.jpg")}/>
                <section className='info3'>
                    <h2 className='title'>
                        Финал
                    </h2>
                    <h3 className='txt'>
                        После того как разбор отредактирован и сформирован в красивый PDF файл, я отправляю его вам, после чего мы вместе с вами можем разобрать ваш запрос </h3>
                </section>
            </div>

            <Sale />
        </div>
    )
}