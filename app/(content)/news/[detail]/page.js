import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../lib/news";

export default async function NewDetail({params}){
    const resolved = await params
    const newsDetail = resolved?.detail;
    const newsSlug = await getNewsItem(newsDetail)

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