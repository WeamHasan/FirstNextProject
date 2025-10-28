import Link from "next/link";

export default async function NewsArticle({ 
    params, searchParams} : {
        params: Promise<{ articleId: string}>;
        searchParams : Promise<{ lang?: "en" | "ar" }>;
    }) {
        const { articleId } = await params;
        const { lang = "en" } = await searchParams;
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1>News article {articleId}</h1>
            <p>Reading in language {lang}</p>

            <div className="flex flex-row gap-4 items-center justify-center">
                <Link href={`/articles/${articleId}?lang=en`} className="text-blue-500 font-bold">English</Link>
                <Link href={`/articles/${articleId}?lang=ar`} className="text-blue-500 font-bold">Arabic</Link>
                {/* <Link href="articles/123?lang=es">Read in Spanish</Link> */}
            </div>
        </div>
    )
}