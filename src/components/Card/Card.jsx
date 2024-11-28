import placeHolderImage from "../../assets/placeholderImg"
import Button from "../button/button"
import style from "./Card.module.css"


function Card({ post }) {
    const { title, image, content, tags } = post;
    console.log(tags)

    return (
        <div className={style.card}>
            <div className={style.img}>
                <img className={style.thumb} src={image || placeHolderImage} alt="" />
            </div>
            <div className={style.body}>
                <h3 className={style.title}>{title}</h3>


                <div className={style.tagSection}> {tags.map(tag =>
                    <span className={tag}>{tag}</span>
                )}
                </div>


                <p className={style.description}>{content}</p>
                <Button />
            </div>
        </div>
    )
}

export default Card