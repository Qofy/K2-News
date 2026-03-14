import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default async function FilterNewsPage({ params }) {
    // `params` us a Promise in newer Next.js internals — await it first.
    const resolved = await params;
    const year = resolved?.year;

    const selectedYear = year?.[0];
    const selectedMonth = year?.[1];
    
    let news;
    let links = getAvailableNewsYears();

    if(selectedYear && !selectedMonth){
        news =getNewsForYear(selectedYear); 
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links=[];
    }

    let newsContent = <p>No news Found for this selected period</p>

if (news && news.length > 0){
    newsContent = <NewsList news={news}/>
}

    // Validate selected year/month early and consistently.
    const invalidYear = selectedYear && !getAvailableNewsYears().includes(+selectedYear);
    const invalidMonth = selectedMonth && selectedYear && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth);

    if (invalidYear || invalidMonth) {
        throw new Error("Invalid News");
    }
    console.log(year)
    // const news = getNewsForYear(newsYear);
    // return <NewsList news={news}/>
    return(
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) =>{
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return(
                        <li key={link}>
                            <Link href={href}> {link} </Link>
                        </li>
                        
                    )
                })}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    )

}