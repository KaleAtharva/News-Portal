import React from "react"

const Search = (props)=>{

    const inputRef=React.useRef(null)
    const btnClick = ()=>{
        props.setGenre(props.search)
        props.list.push(props.genre)
        props.setSearch("")
        inputRef.current.focus()
    }
    const onkeyup = (event) => {
        if(event.key==='Enter'){
            props.setGenre(props.search)
            props.list.push(props.genre)
            props.setSearch("")
            inputRef.current.focus()
        }
    }

    return(
        <div>
            <input
                ref={inputRef} 
                type="text" 
                placeholder="Search" 
                className="search-box"
                required
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
                onKeyUp={onkeyup}
            />
            <button className="search-btn" type="button" onClick={btnClick}>Search</button>
        </div>
    )
}

export default Search