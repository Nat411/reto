import Header from "../header"
import "./style.css"
import hotel from "../../assets/hotels/hotel1.webp"
import hotel2 from "../../assets/hotels/hotel2.webp"
import hotel3 from "../../assets/hotels/hotel3.webp"

function Details(){
    return (
        <div>
            <Header/>
            <div className = "details-box">
                <div className = "details-title-box">
                    <h3 className = "details-title">Place</h3>  
                </div>
                <div className="img-flex">
                    <img src = {hotel} className="detail-img-big" />
                    <div className = "img-container">
                        <img src = {hotel2} className="detail-img-small" />
                        <img src = {hotel3} className="detail-img-small" />
                    </div>
                    <div className = "img-container">
                        <img src = {hotel2} className="detail-img-small" />
                        <img src = {hotel3} className="detail-img-small" />
                    </div>
                </div>
                <div className = "details-title-box">
                    <h3 className = "details-title">Vivienda rentada entero en Calgary, Canadá</h3>  
                    <p style= {{ margin: 0, color: "var(--subtitle-font)"}}>4 huéspedes  ·  2 habitaciones · 2 camas  ·  2 baños</p>
                </div>
            </div>

        </div>
    )

}

export default Details