import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const ContentSkeleton = ()=>{
    return(
            <div className="container">
                <Skeleton className="news-pic"/>
                <h1 className="heading"><Skeleton/></h1>
                <p className="date-time"><Skeleton/></p>
                <p className="about"><Skeleton/></p>
            </div>
    )
}

export default ContentSkeleton