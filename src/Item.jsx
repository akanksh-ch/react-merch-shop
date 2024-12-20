import './Item.css'

export default function Item({name, price, imageSrc}) {
    return (
    <div>
        <img src={imageSrc}></img>
        <p>{name}</p>
        <p>${price}</p>
    </div>
    )
}