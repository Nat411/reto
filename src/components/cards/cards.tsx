 
import "./style.css"
import hotel from "../../assets/hotels/hotel1.webp"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function Card(){
    return(
        <div className="card-box">
            <img src = {hotel} className="card-img"/>
            <div className="card-info-flex">
                <h3 className = "card-title">Place</h3>
                <div className="card-rating">
                    <StarRateRoundedIcon />
                    <p>4.8</p>
                </div>
            </div>
            <p style= {{ margin: 0, color: "var(--font-grey)"}}>Calgary, Canadá</p>
            <p style= {{ margin: 0, color: "var(--font-grey)"}}>23 - 28 de abr</p>
            <p style= {{ margin: "0.2px", fontSize: "16px",color: "var(--black)"}}>
                <span style = {{ fontWeight: "600"}}>$657,013 COP </span>por noche</p>
        </div>
    )
}



export default Card