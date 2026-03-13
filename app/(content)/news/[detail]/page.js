import { DUMMY_NEWS } from "@/dummy-news"
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewDetail({params}){
    const newsDetail = params.detail;
    const newsSlug = DUMMY_NEWS.find(newsItems=> newsItems.slug === newsDetail);

    if(!newsSlug){
        notFound()
    }
    
    return(
        <article className="news-article">
            <header>
                <Link href={`/news/${newsSlug.slug}/image`}>

                <img src={`/images/news/${newsSlug.image}`}/>
                </Link>
                <h1>{newsSlug.title}</h1>
               <time dateTime={newsSlug.date}>{newsSlug.date}</time>
            </header>
            <p>{newsSlug.content}</p>
        </article>
    )
}