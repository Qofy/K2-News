import Link from "next/link";

export default function NewsList({news}){
    return <ul className="news-list">
               {news.map(newslist =>(
                <li key={newslist.id}>
                    <Link href={`/news/${newslist.slug}`}>
                    <img src={`/images/news/${newslist.image}`} alt={`${newslist.title}`}/>
                    <span>{newslist.title}</span>
                    </Link>
                </li>
               ))}
            </ul>
}