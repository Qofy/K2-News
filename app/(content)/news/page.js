// import Link from "next/link";
// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function New(){
    const news = await getAllNews(); // fetch server-side, handles fallback
    // const response = await fetch('http://localhost:8080/news');
    // if (!response.ok){
    //     throw new Error("Failed to get data!");
    // };
    // const news = await response.json();
    return(
        <div id="page">
        <h1>News Page</h1>
           <NewsList news={news} />
        </div>
    )
}