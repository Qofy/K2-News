import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation";


export default function ImageDetail({params}){
     const newsDetail = params.detail;
        const newsSlug = DUMMY_NEWS.find(newsItems=> newsItems.slug === newsDetail);
    if(!newsSlug){
        notFound()
    }

    return <div className="fullscreen-image">
             <img src={`/images/news/${newsSlug.image}`} alt={newsSlug.slug}/>
    </div>
}