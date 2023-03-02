import { PriceItem } from "../cmps/price-item"


export function Prices() {

    const priceList = [
        {
            title: 'Разбор Матрицы',
            content: ['Полный разбор матрицы', 'Ваши характеристики', 'Ваши таланты', 'Жизненные задачи', 'Кармические нельзя', 'Предназначение', 'Кем мы должны стать', 'Ответы по волнующим темам'],
            pricing: {
                placeCount: 5,
                onSale: true,
                salePrice: 3990,
                price: 5000
            }
        },
        {
            title: 'Парный разбор матрицы',
            content: ['Полные разборы на каждого', 'Разбор отношений', 'Совместимость', 'Перспектива союза', 'Чувства и эмоции партнеров друг к другу', 'Как влиять на партнёра', 'Кармическая связь', 'Как вывести отношения в плюс'],
            pricing: {
                placeCount: 4,
                onSale: true,
                salePrice: 8000,
                price: 10000
            }
        },
        {
            title: 'Детский разбор матрицы',
            content: ['Характеристика', 'Таланты', 'Жизненные задачи', 'Предназначение', 'Какие умения нужно прокачивать', 'Какие сферы деятельности подходят'],
            pricing: {
                placeCount: 8,
                onSale: true,
                salePrice: 2400,
                price: 3000
            }
        },
    ]
    return (

        <div className="prices-page" id="price">
            <div className="title">
                <h1>Тарифы</h1>
                <h2>Для более подробной информации о тарифах можно <a href='https://t.me/dea_rune' target="_blank">связаться со мной.</a></h2>
            </div>
            <div className="price-list">
                {priceList.map((item, i) => <PriceItem key={i} item={item} />)}
            </div>

        </div>

    )
}