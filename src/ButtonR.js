import { FaAnglesRight } from "react-icons/fa6";

const ButtonR = (props)=>{
    
    const nextNews = ()=>{
        if(props.list1.length)
        props.setGenre(props.list1.pop())
        else{
            alert("No next news")
        }
    }

    return(
        <div>
            <button className="next-btn" onClick={nextNews}><span>Next</span></button>
        </div>
    )
}

export default ButtonR