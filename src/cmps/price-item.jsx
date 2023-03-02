export function PriceItem({ item }) {

    return (
        <section className="price-item">
            <h1>{item.title}</h1>
            <ul>
                {item.content.map((content, i) => <li key={i}>{content}</li>)}
            </ul>
            <div className="price-about">
                <span className="place-count">Количество мест: {item.pricing.placeCount}</span>
                {item.pricing.onSale ?
                    <div>
                        <span className="price">{item.pricing.salePrice} руб</span>
                        <span className="sale-price">{item.pricing.price} руб</span>
                    </div>
                    :
                    <span className="price">{item.pricing.price} руб</span>}
            </div>
            <a href='https://t.me/dea_rune' target="_blank">
                Записаться
            </a>
        </section>
    )
}