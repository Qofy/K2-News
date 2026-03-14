// import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../../lib/news";


export default async function ImageDetail({params}){
    const resolved = await params;
     const newsDetail = resolved?.detail;
        const newsSlug = await getNewsItem(newsDetail)
    if(!newsSlug){
        notFound()
    }

    return <div className="fullscreen-image">
             <img src={`/images/news/${newsSlug.image}`} alt={newsSlug.slug}/>
    </div>
}