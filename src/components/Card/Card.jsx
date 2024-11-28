import placeHolderImage from "../../assets/placeholderImg"
import Button from "../button/button"
import style from "./Card.module.css"


function Card({ title, image, content, tags, published }) {
    return (

        <div className={style.card}>
            <div className={style.img}>
                <img className={style.thumb} src={image || placeHolderImage} alt="" />
            </div>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{content}</p>
            <Button />
        </div>
    )
}

export default Card