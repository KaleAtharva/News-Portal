import Search from "./Search"

const Header = (props)=>{

    const changeGenre = (e)=>{
        props.setGenre(e.target.value)
        props.list.push(props.genre)
    }   

    const reload = ()=>{
        window.location.reload()
    }

    return(
        <div className="header">
            <div className="logo-space">
            <img src="./assets/images.png" className="logo" alt="1" onClick={reload}/>
            <h1 className="portal" onClick={reload}>News Portal</h1>
            </div>
            <div className="news-genre">
                <button type="button" className="news-type" value="Sports" onClick={changeGenre}>Sports</button>
                <button type="button" className="news-type" value="Finance" onClick={changeGenre}>Finance</button>
                <button type="button" className="news-type" value="Politics" onClick={changeGenre}>Politics</button>
            </div>
            <Search genre={props.genre} setGenre={props.setGenre} search={props.search} setSearch={props.setSearch} push={props.push} list={props.list} />
        </div>
    )
}

export default Header