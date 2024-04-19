import Header from "../header"
import "./style.css"
import hotel from "../../assets/hotels/hotel1.webp"
import hotel2 from "../../assets/hotels/hotel2.webp"
import hotel3 from "../../assets/hotels/hotel3.webp"
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import FlatwareRoundedIcon from '@mui/icons-material/FlatwareRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import DeskRoundedIcon from '@mui/icons-material/DeskRounded';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import MyCalendar from "../calendar"


function Details(){
    return (
        <div className="details">
            <Header/>
            <div className="details-title-box">
                <div className = "details-title">Tesoro de la ciudad el 13</div>  
                <div className = "details-title-options">
                    <div className="details-title-options-text">
                        <IosShareRoundedIcon sx = {{
                            fontSize : '18px',
                            marginRight: '8px',
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
                        <StarRateRoundedIcon sx = {{
                            fontSize : '16px',
                        }}/>
                        <StarRateRoundedIcon sx = {{
                            fontSize : '16px',
                        }}/><StarRateRoundedIcon sx = {{
                            fontSize : '16px',
                        }}/><StarRateRoundedIcon sx = {{
                            fontSize : '16px',
                        }}/>
                        <StarRateRoundedIcon sx = {{
                            fontSize : '16px',
                        }}/>
                    </div>
                </div>
                <div className = "calification-section1">
                    <div className="calification-section-text">62</div>
                    <div className="calification-section-text"><u>Reseñas</u></div>
                </div>
            </div>

            <div className = "profile-box">
                <div className="profile-pic">
                    <img src="https://a0.muscache.com/im/pictures/user/77faa31f-3f1b-41ef-854f-16417496ffd6.jpg?im_w=240" />
                </div>
                <div className="profile-info">
                    <div className="profile-title">
                        Anfitrión: Lisbeth
                    </div>
                    <div className="profile-subtitle">
                        Superanfitrión· 1 año anfitrionando
                    </div>
                </div>
                
            </div>

            <div className = "perks-box">
                <div className="perks-info">
                    <LocalParkingRoundedIcon sx = {{
                        color: "var(--subtitle-font)",
                        border: "2px solid var(--subtitle-font)",
                        borderRadius: "50px",
                        fontSize: "30px",
                    }}/>
                    <div className="perks-text">
                        <div className="profile-title">
                            Estacionamiento gratuito
                        </div>
                        <div className="profile-subtitle">
                        Este es uno de los pocos lugares en la zona con estacionamiento gratuito.
                        </div>
                    </div>
                </div>
                <div className="perks-info">
                    <MeetingRoomRoundedIcon sx = {{
                        color: "var(--subtitle-font)",
                        fontSize: "30px",
                    }}/>
                    <div className="perks-text">
                        <div className="profile-title">
                            Llegada autónoma
                        </div>
                        <div className="profile-subtitle">
                        Realiza tu llegada fácilmente mediante el sistema de cerradura inteligente.
                        </div>
                    </div>
                </div>
                <div className="perks-info2">
                    <MilitaryTechRoundedIcon sx = {{
                        color: "var(--subtitle-font)",
                        fontSize: "30px",
                    }}/>
                    <div className="perks-text">
                        <div className="profile-title">
                            Lisbeth tiene la categoría de Superanfitrión
                        </div>
                        <div className="profile-subtitle">
                        Los Superanfitriones son anfitriones experimentados, con evaluaciones excelentes.
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="welcome">
                <p className="welcome-text">
                    ¡Te damos la bienvenida a Colores de Battistella! Espectacular condominio ubicado en el prestigioso vecindario de Beltline, Calgary. 
                </p>
                <p className="welcome-text">
                Este increíble condominio de 921 pies cuadrados (2 dormitorios+ 2 baños) se encuentra en una ubicación perfecta a poca distancia a pie de tiendas, restaurantes, pubs, parques, cafeterías, transporte público, 17...
                </p>
                <div className="welcome-more">
                    <u>Mostrar más</u>
                    <ArrowForwardIosRoundedIcon sx ={{
                        fontSize: "16px",
                        color: "var(--title-font)"
                    }}/>
                </div>
            </div>

            <div className="sleep">
                <div className = "sleep-title">
                    ¿Dónde vas a dormir?
                </div>
                <div className="sleep-info">
                    <div className = "sleep-habitacion">
                        <BedRoundedIcon sx = {{
                            fontSize: "30px",
                            padding: "4px",
                            marginBottom: "10px"
                        }}/>
                        <div className = "profile-title">Habitación 1</div>
                        <div className="profile-subtitle">1 cama doble</div>
                    </div>
                    <div className = "sleep-habitacion">
                        <BedRoundedIcon sx = {{
                                fontSize: "30px",
                                padding: "4px",
                                marginBottom: "10px"
                            }}/>
                        <div className = "profile-title">Habitación 2</div>
                        <div className="profile-subtitle">1 cama queen</div>
                    </div>
                </div>
                
            </div>

            <div className="offer">
                <div className="sleep-title">
                    Lo que este lugar ofrece
                </div>
                <div className="offer-text">
                    <LocationCityRoundedIcon sx = {{
                        fontSize: "30px",
                        color: "var(--title-font)",
                    }}/>
                    <p className = "offer-info"> Vista al horizonte de la ciudad </p>
                </div>
                <div className="offer-text">
                    <FlatwareRoundedIcon sx = {{
                        fontSize: "30px",
                        color: "var(--title-font)",
                    }}/>
                    <p className = "offer-info"> Cocina </p>
                </div>
                <div className="offer-text">
                    <WifiRoundedIcon sx = {{
                        fontSize: "30px",
                        color: "var(--title-font)",
                    }}/>
                    <p className = "offer-info"> Wifi </p>
                </div>
                <div className="offer-text">
                    <DeskRoundedIcon sx = {{
                        fontSize: "30px",
                        color: "var(--title-font)",
                    }}/>
                    <p className = "offer-info"> Zona de trabajo</p>
                </div>
                <div className="offer-text">
                    <DirectionsCarFilledRoundedIcon sx = {{
                        fontSize: "30px",
                        color: "var(--title-font)",
                    }}/>
                    <p className = "offer-info"> Estacionamiento gratis en las instalaciones: 1 puesto </p>
                </div>
                <div className="offer-button">
                    <div className="offer-button-text">Mostrar los x servicios</div>
                </div>
            </div>

            <div className="schedule">
                <div className="schedule-title">
                    5 noches en Calgary
                </div>
                <MyCalendar />
            </div>
            kjbvytc
            
        </div>
    )

}

export default Details