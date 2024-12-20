import './Item.css'

export default function Item({name, price, imageSrc}) {
    return (
    <div className="item">
        <img src={imageSrc}></img>
        <p>{name}</p>
        <p>${price}</p>
    </div>
    )
}