
import { SlSocialVkontakte, SlSocialInstagram } from 'react-icons/sl'
import { TbBrandTelegram } from "react-icons/tb"
export function AboutMe() {

    return (
        <div className="about-me-page" id="me">
            <div className="about-me">
                <img src="https://res-console.cloudinary.com/dvb3zhsvh/thumbnails/v1/image/upload/v1680554987/ZGVhX2tveWN1aA==/as_is" />
                <div className='about-me-container'>
                    <div className='about-me-txt'>
                        <h1>Здравствуй, путник.</h1>
                        <h3>
                            Рада тебя видеть на моей странице!
                            Меня зовут Делайла, я много лет в эзотерике, еще с 20 лет меня интересовала тема работы с подсознанием, и я искала всевозможные варианты как хакнуть программу нашей жизни и улучшить её. Всю свою жизнь я искала ответы на вопросы, которые мучали меня. Изучала информацию, психологию, читала разные книги, пробовала различные медитации, техники для проработки своей личности и исцеления души.
                            На данный момент я плотно занимаюсь регрессивной нумерологией по уникальной методике, в которой я нашла ответы не только на все свои вопросы, больные темы, но и так же ответы для своих близких и друзей.
                            Я полностью растворилась в этой философии метода, в системе Арканологии и матрицах жизненного пути.
                            Приглашаю тебя на консультацию и полный разбор матрицы чтобы помочь тебе найти ответы на твои вопросы. Задать вектор движения, расскажу о твоих возможностях и потенциале, о твоих кармических жизненных задачах, так же найду твое ПРЕДНАЗНАЧЕНИЕ и сферы реализации, в которых находятся твои деньги.
                        </h3>
                        <h3>«Кто владеет информацией - тот владеет миром».
                            Натан Ротшильд</h3>
                    </div>
                    <div className='about-me-icons'>
                        <a href='https://www.instagram.com/dea_rune/' target="_blank">
                            <SlSocialInstagram style={{ fontSize: '22px', color: 'rgb(212, 167, 95)' }} />
                        </a >
                        <a>
                            <SlSocialVkontakte style={{ fontSize: '22px', color: 'rgb(212, 167, 95)' }} />
                        </a>
                        <a href='https://t.me/dea_rune' target="_blank">
                            <TbBrandTelegram style={{ fontSize: '22px', color: 'rgb(212, 167, 95)' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}