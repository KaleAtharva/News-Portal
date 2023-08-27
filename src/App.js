import Header from "./Header"
import Content from "./Content"
import React from "react"
import { useStackState} from "rooks"
import Button from "./Button"
import ButtonR from "./ButtonR"
import 'react-loading-skeleton/dist/skeleton.css'


const App = ()=>{
    const API_KEY="ebecebca46f540bf95fb6f42a30d3561"
    const API_URL="https://newsapi.org/v2/everything?q="
    const [news,setNews]=React.useState([])
    const [fetchError,setFetchError]=React.useState('')
    const [genre,setGenre]=React.useState('India')
    const [search,setSearch]=React.useState('')
    const [loading,setLoading]=React.useState(true)
    let [list, {push,pop,peek,length},listInReverse] = useStackState([])
    let [list1] = useStackState([])

    React.useEffect(() => {
        
        const fetchNews = async (query)=>{
            try{
                const response = await fetch(`${API_URL}${query}&apiKey=${API_KEY}`)
                if(!response.ok) throw Error("Didn't recieve news")
                const newsArray = await response.json()
                setNews(newsArray)
            }catch(err){
                setFetchError(err.message)
            }finally{
                setLoading(false)
            }
        }
        console.log(list)
        fetchNews(genre)
    },[genre,list])

    return(
        <div className="App">
            <Header list={list} genre={genre} setGenre={setGenre} setSearch={setSearch} search={search} push={push} />
            <main>
                {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
                {!fetchError && <Content news={news} loading={loading}/>}
            </main>
            <Button genre={genre} setGenre={setGenre} pop={pop} peek={peek} length={length} list={list} listInReverse={listInReverse} list1={list1}/>
            <ButtonR setGenre={setGenre} list1={list1}/>
        </div>
    )
}

export default App