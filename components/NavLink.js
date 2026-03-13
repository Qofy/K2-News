"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navlink({href, children}) {
    const path = usePathname();
    return(
        <Link href={href} className={path.startsWith(href) ? "active" : "undefine"}>{children}</Link>
    )
}