import Header from "../header"
import "./style.css"
import hotel from "../../assets/hotels/hotel1.webp"
import hotel2 from "../../assets/hotels/hotel2.webp"
import hotel3 from "../../assets/hotels/hotel3.webp"
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function Details(){
    return (
        <div>
            <Header/>
            <div className="details-title-box">
                <div className = "details-title">City Treasure on 13th</div>  
                <div className = "details-title-options">
                    <div className="details-title-options-text">
                        <IosShareRoundedIcon sx = {{
                            fontSize : '18px',
                            marginRight: '8px',
                            // color: 'var(--subtitle-font)'
                        }}/>
                      <u>Compartir</u>
                    </div>
                    <div className="details-title-options-text">
                        <FavoriteBorderRoundedIcon sx = {{
                            fontSize : '18px',
                            marginRight: '8px',
                        }}/>
                        <u>Guardar</u>
                    </div>
                </div>  
            </div>

            <div className = "img-flex">
                <div className="imgs">
                    <div className = "img-big">
                    <img src = {hotel} />
                    </div>
                    <div className="img-small">
                    <img src = {hotel2} />
                    <img src = {hotel3} />
                    </div> 
                    <div className="img-small">
                    <img src = {hotel2} />
                    <img src = {hotel3} />
                    </div>                     
                </div>
            </div>

            <div className = "info">
                <div className = "info-title">Vivienda rentada entero en Calgary, Canadá</div>
                <div className = "info-subtitle">4 huéspedes · 2 habitaciones · 2 camas · 2 baños</div>
            </div>

            <div className= "calification">
                <div className = "calification-section">
                    <div className="calification-section-text">Favorito entre huéspedes</div>
                </div>
                <div className = "calification-section">
                    <div className="calification-section-text">4.87</div>
                    <div className="calification-section-rate">
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                    </div>
                </div>
                <div className = "calification-section1">
                    <div className="calification-section-text">62</div>
                    <div className="calification-section-text"><u>Reseñas</u></div>
                </div>
            </div>


        </div>
    )

}

export default Details