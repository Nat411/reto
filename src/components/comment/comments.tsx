import "./style.css"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function Comments(){
    return(
        <div className="comment">
            <div className="comment-pic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwDHbc-_tMbrtvXzQtA28eYwvTaDTv7DjngoLkV5Dpw&s" />
                
                <div className="profile-info">
                    <div className="profile-title">
                        Evan
                    </div>
                    <div className="profile-subtitle">
                        Cranbrook, Canadá
                    </div>
                </div>
            </div>

            <div className="comment-info">
                <div className="comment-rate">
                        <StarRateRoundedIcon sx = {{
                            fontSize : '14px',
                        }}/>
                        <StarRateRoundedIcon sx = {{
                            fontSize : '14px',
                        }}/><StarRateRoundedIcon sx = {{
                            fontSize : '14px',
                        }}/><StarRateRoundedIcon sx = {{
                            fontSize : '14px',
                        }}/>
                        <StarRateRoundedIcon sx = {{
                            fontSize : '14px',
                        }}/>
                </div>
                <div className= "comment-title">
                    · Hace 4 semanas
                </div>
                <div className="comment-subtitle">
                    · Estadía de varias noches
                </div>
            </div>

            <div className="comment-text">
                Muy agradable, muy limpio y está en el centro y muy conveniente para moverse. Excelentes vistas y todo.
            </div>
    </div>
    )
}

export default Comments