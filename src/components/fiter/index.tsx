import react, { useState } from "react"
import "./style.css"
import { links } from "../../assets/image-links"

function Filter(){
    const [selectedFilter, setSelectedFilter] = useState("")
    return(
        <div className="filter-div">
            {links.map((item, i) => (
                <div 
                    key = {i} 
                    className={i.toString() === selectedFilter ? 'links-box selected-box' : 'links-box'}

                    onClick={() => {
                        console.log("selecting key", i);
                        setSelectedFilter(i.toString())
                    }}
                >
                    <img src ={item.imgSrc} className="links-img"/>
                    <p className={i.toString() === selectedFilter ? 'links-label selected-label' : 'links-label'}>
                        {item.label}</p>
                </div>

            ))}
        </div>
    )
}
export default Filter