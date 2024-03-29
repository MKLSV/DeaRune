import { Methods } from "../cmps/methods"
import { useState } from "react"

export function SecondPage() {
    const [currentOpen, setCurrentOpen] = useState(null);

    const contant = [
        {
            title: 'Где твое место в этом мире',
            txt: 'Измени свою жизнь узнав предназначение и кармические задачи с помощью книги жизни созданной специально для тебя',
            toggle: '+'
        },
        {
            title: 'Денежный ключ',
            txt: 'Разбор матрицы позволит: Найди ключ к денежному изобилию и узнай все секреты финансового благополучия Узнать в какой сфере находятся твои деньги и какие профессии подойдут именно тебе. Узнать как деньги будут приходить к тебе и что блокирует твой денежный канал.',
            toggle: '+'
        },
        {
            title: 'Жизненный путь',
            txt: 'Кем вы были в прошлой жизни, кто вы в этой жизни, с какими задачами вы родились в этой',
            toggle: '+'
        },
        {
            title: 'Препятствия',
            txt: 'Отвечают на вопросы: сложности и препятствия на Жизненном пути, болезни.',
            toggle: '+'
        },
        {
            title: 'Отношения',
            txt: 'кармические отношения, для чего эти даны эти отношения.',
            toggle: '+'
        }
    ]


    return (
        <div className="second-page" >
            <div className="second-page-container">
                <h1>Этот метод для тебя, если ты хочешь узнать:</h1>
                {contant.map((item, i) => <Methods key={i} i={i} item={item} setCurrentOpen={setCurrentOpen} currentOpen={currentOpen}/>)}
            </div>
        </div>
    )

}