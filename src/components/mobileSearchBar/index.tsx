import react from "react"
import "./style.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

function MobileSearchBar(){
    return(
        <div className="mobile-search-bar">
            <div className="section">
                <div className = "search-icon">
                        <SearchRoundedIcon className = "search-icon" sx = {{fontSize: "30px"}}/>
                </div>
                <div className="text">
                <div className="tile">En cualquier lugar del mundo</div>
                <div className="subtitle">Cualquier semana • ¿Cuántos?</div>
                </div>
                
            </div>
            <div className="settings" >
                <TuneRoundedIcon sx = {{position: 'relative', top: '8px', left: '8.5px', bottom: '8px', right: '8.5px'}}/>
            </div>
        </div>

    )
}
export default MobileSearchBar