import { notFound} from "next/navigation";
import { getNewsItem } from "../../../../../../lib/news";
import Backdrop from "../../../../../../components/Backdrop";

// import { DUMMY_NEWS } from "@/dummy-news"


export default async function ImageIntercept({params}){
    const newsDetail = params.detail;
        const newsSlug = await getNewsItem(newsDetail);
    if(!newsSlug){
        notFound()
    }

    return (
    <>
    <Backdrop/>
    <dialog className="modal" open>
    <div className="fullscreen-image"> 
             <img src={`/images/news/${newsSlug.image}`} alt={newsSlug.slug}/>
    </div>
    </dialog>
    </>
    );
}