import Link from "next/link";

export default function SearchLayout({ children }: { children: any }){
    return (
        <main>
            <div className="flex gap-x-5">
            <Link href={'/'}><p className="mt-8 mb-10 text-2xl font-semibold">Home</p></Link>
            </div>
            {children}
        </main>
    )
}
