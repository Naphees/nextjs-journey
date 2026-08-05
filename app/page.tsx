"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
        <div className="mt-20px">
             <h1>Home Page </h1>
             <h2>Next.js journey</h2>
             <h3>Day 1: Intro next.js and file based routing</h3>
             <h3>Day 2: All routing methods</h3>
             <Link href={"/about"}>Go To about by Link </Link>
             <br/><br/>
             <button onClick={()=> router.push("/contact")}>
              Go To Contact by {"router.push();"}method
             </button>
              <br/><br/>
             <button onClick={()=> router.replace("/about")}>
              Go To About by {"router.replace();"} method
             </button>
             <br/><br/>
             <button onClick={()=> router.forward()}>
               {"router.forward();"} method used for move forward method
             </button>
             <br/><br/>

             <button onClick={()=> router.back()}>
                {"router.back();"} method used for move back method
             </button>
             <br/><br/>
             <button onClick={()=> router.refresh()}>
              Refresh page by  {"router.refresh();"} method
             </button>
             <br/><br/>
             <button onClick={()=> router.prefetch("/about")}>
                 load a page in advanace by {"router.prefetch()"} method
             </button>

        </div>
  );
}
