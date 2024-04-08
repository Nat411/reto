import react from "react"
import logo from "../../assets/long-logo.png"
import "./styles.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LanguageIcon from '@mui/icons-material/Language'
import { SxProps } from "@mui/material"
import BasicMenu from "./ProfileMenu"
import SimpleBottomNavigation from "./BottomNav"
import MobileSearchBar from "../mobileSearchBar"

function Header() {
    const newFontSize: SxProps = {
        fontSize: '20.8px',
    };
    return(
        <div className = "navbar">
            <img src ={logo} alt= "logo" className="navbar-logo"/>
            <div className = "selectionbar">
                <div className="selection1">Estadias</div>
                <div className="selection">Experiencias</div>
                <div className="selection">Experiencias en línea</div>
            </div>
            
            <div className="search-bar">
                <div className="search-bar-section">
                    <div className="search-bar-text">Dónde</div>
                    <div className="search-bar-text-subtitle">Explora destinos</div>
                </div>
                <div className="search-bar-section">
                    <div className="search-bar-text">Llegada</div>
                    <div className="search-bar-text-subtitle">Agrega fechas</div>
                </div>
                <div className="search-bar-section">
                    <div className="search-bar-text">Salida</div>
                    <div className="search-bar-text-subtitle">Agrega fechas</div>
                </div>
                <div className="search-bar-section2">
                    <div className="search-bar-text">Quien</div>
                    <div className="search-bar-text-subtitle">¿Cuántos?</div>
                </div>
                <div className = "search-icon-div">
                    <SearchRoundedIcon className = "search-icon" />
                </div>
            </div>
            <div className="profile-container">
                <div className= "text-airbnb">Pon tu espacio en airbnb</div>
                <div className= "text-airbnb">
                    <LanguageIcon sx = {newFontSize} />
                </div>
                <div className= "profile-div">
                    <BasicMenu />
                </div>
            </div>
            <MobileSearchBar />
            <SimpleBottomNavigation />
        </div>
            
    )
    }

export default Header