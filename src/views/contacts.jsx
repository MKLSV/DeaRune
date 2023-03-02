import { SlSocialVkontakte, SlSocialInstagram,SlScreenSmartphone } from 'react-icons/sl'
import { SiWhatsapp } from 'react-icons/si'
import { TbBrandTelegram } from "react-icons/tb"
import { RiContactsLine } from "react-icons/ri"


export function Contacts() {
    return (
        <div className="contacts-page" id="contacts">
            <span className='contacts-icon'>
                <SlScreenSmartphone />
            </span>
            {/* <h1>Контакты</h1> */}
            <div className="contacts">

                <a href='https://www.instagram.com/dea_rune/' target="_blank" className='insta'>
                    <SlSocialInstagram />
                    <span>Instagram</span>
                </a>
                <a href='https://t.me/dea_rune' target="_blank" className='telega'>
                    <TbBrandTelegram />
                    <span>Telegram</span>
                </a>
                <a href='https://wa.me/+79003211465' target="_blank" className='whatsapp'>
                    <SiWhatsapp />
                    <span>Whatsapp</span>
                </a>
            </div>
        </div>
    )
}