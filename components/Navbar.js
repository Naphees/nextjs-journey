import Link  from "next/link";

export default function Navbar(){
    return(
        <nav style={{ display:"flex", justifyContent:"space-between", alignItem:"center" , flexWrap:"wrap",margin:"12px"}}>
            <Link href="/">
                  Home
            </Link>
            <Link href="/about">
                 About
            </Link>
            <Link href="/contact">
                 Contact
            </Link>
            <Link href="/user/Naphees_Mern_Developer">
                 User
            </Link>
            <Link href="/day3">
                Day 3
            </Link>
        </nav>

    );
}
