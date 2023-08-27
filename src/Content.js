import ContentSkeleton from "./ContentSkeleton"

const Content = (props)=>{
    
    const arr = props.news.articles?.map(data => {
        const date = new Date(data.publishedAt).toLocaleString("en-Us",{timeZone: "Asia/Jakarta",})
        const open = (url)=>{
            window.open(url,"_blank")
        }
        return(
        data.urlToImage && 
        <div className="container" onClick={() => open(data.url)}>
             <img src={data.urlToImage} alt="1" className="news-pic"/>
             <h1 className="heading">{data.title}</h1>
             <p className="date-time">{`${data.source.name} . ${date}`}</p>
             <p className="about">{data.description}</p>
        </div>
        )
    })

    return(
        <main className="content">
            {
                props.loading
                    ?
                    <>
                        <ContentSkeleton/><ContentSkeleton/><ContentSkeleton/>
                        <ContentSkeleton/><ContentSkeleton/><ContentSkeleton/>
                    </>
                    :
                arr
            }
        </main>
    )
}

export default Content