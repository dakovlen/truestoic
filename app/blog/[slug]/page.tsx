import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Metadata } from "next"
import Image from "next/image"
import { TableOfContents } from "@/components/TableOfContents"
import { AudioPlayer } from "@/components/AudioPlayer"
import { remark } from "remark"
import remarkHtml from "remark-html"

interface Article {
  title: string
  author: string
  date: string
  audioSrc?: string
  content: string
  image?: string
}

// Функція для перетворення Markdown у HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown)
  return result.toString()
}

// Функція для отримання даних статті за slug
async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(process.cwd(), "app/blog", `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  // Перетворення Markdown у HTML
  const htmlContent = await markdownToHtml(content)

  return {
    title: data.title,
    author: data.author,
    date: data.date,
    audioSrc: data.audioSrc,
    content: htmlContent,
    image: data.image,
  }
}

// Генерація метаданих
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticle(params.slug) // Використовуємо await
  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article does not exist.",
    }
  }

  return {
    title: article.title,
    description: article.content.slice(0, 160), // Перші 160 символів як опис
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160),
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.slice(0, 160),
    },
  }
}

// Сторінка статті
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug) // Використовуємо await

  if (!article) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <p>The requested article does not exist.</p>
      </div>
    )
  }

  return (
    <article className="container px-4 py-8 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      <div className="flex items-center mb-6">
        <Image
          src={article.image || "/placeholder.svg?height=50&width=50"}
          alt={article.author}
          width={50}
          height={50}
          className="mr-4 rounded-full"
        />
        <div>
          <p className="font-semibold">{article.author}</p>
          <p className="text-sm text-muted-foreground">{article.date}</p>
        </div>
      </div>
      {article.audioSrc && <AudioPlayer audioSrc={article.audioSrc} />}
      <div className="flex flex-col gap-8 md:flex-row">
        <TableOfContents content={article.content} />
        <div
          className="flex-grow prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  )
}