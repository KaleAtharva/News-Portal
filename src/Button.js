import { FaAnglesLeft } from "react-icons/fa6";

const Button = (props)=>{

    const prevNews = ()=>{
        if(props.list.length){
            props.setGenre(props.peek())
            props.list1.push(props.genre)
            props.list.pop()
        }else{
            alert("No previous news sections")
        }
    }

    return(
        <div>
            <button className="prev-btn" onClick={prevNews}><span>Prev</span></button>
        </div>
    )
}

export default Button