import Button from "../button/button"
import style from "./Card.module.css"


function Card() {
    return <div className={style.card}>
        <div className={style.img}>
            <img className={style.thumb} src="" alt="" />
        </div>
        <h3 className={style.title}>Emrakul</h3>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum nostrum ut enim dicta iusto modi dignissimos architecto ad quaerat commodi debitis animi, reiciendis ullam.</p>
        <Button />
    </div>
}

export default Card