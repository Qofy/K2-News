import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterNews({year, month}) {
    let news; 

    // DB stores years/months as zero-padded strings (e.g. '2021', '07').
    const y = year;
    const m = month ? String(month).padStart(2, '0') : undefined;

    if (y && !m){
        news = await getNewsForYear(y);
    }

    if(y && m){
        news = await getNewsForYearAndMonth(y, m);
    }

     let newsContent = <p>No news Found for this selected period</p>

if (news && news.length > 0){
    newsContent = <NewsList news={news}/>
}

return newsContent;
}

async function FilterHeader({year, month}){
const availableYear = await getAvailableNewsYears();
let links= availableYear;

    // normalize to DB string formats
    const y = year;
    const m = month ? String(month).padStart(2, '0') : undefined;

    if ((y && !availableYear.includes(y)) ||
    (m && !getAvailableNewsMonths(y).includes(m))){
          throw new Error("Invalid filter");
    }

    if(y && !m){
        links = getAvailableNewsMonths(y)
    }

    if(y && m){
        links = []
    }

    return  <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) =>{
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                        return(
                        <li key={link}>
                            <Link href={href}> {link} </Link>
                        </li>
                        
                    )
                })}
                </ul>
            </nav>
        </header>

}


export default async function FilterNewsPage({ params }) {
    // `params` us a Promise in newer Next.js internals — await it first.
    const resolved = await params;
    const year = resolved?.year;

    const selectedYear = year?.[0];
    const selectedMonth = year?.[1];

    return(
        <>
       <Suspense fallback={<h3>Loading....</h3>}>
        <FilterHeader year={selectedYear} month={selectedMonth}/>
        <FilterNews year={selectedYear} month={selectedMonth}/>
       </Suspense>
        </>
    )

}