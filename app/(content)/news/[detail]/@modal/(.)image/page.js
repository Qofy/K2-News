"use client"
import { DUMMY_NEWS } from "@/dummy-news"
import { notFound, useRouter } from "next/navigation";


export default function ImageIntercept({params}){
    const newsDetail = params.detail;
    const router = useRouter();
        const newsSlug = DUMMY_NEWS.find(newsItems=> newsItems.slug === newsDetail);
    if(!newsSlug){
        notFound()
    }

    return (
    <>
    <div className="modal-backdrop" onClick={router.back}/>
    <dialog className="modal" open>
    <div className="fullscreen-image"> 
             <img src={`/images/news/${newsSlug.image}`} alt={newsSlug.slug}/>
    </div>
    </dialog>
    </>
    );
}