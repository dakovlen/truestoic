import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TrueStoic Blog | Exploring Stoic Philosophy",
  description: "Dive into articles about Stoic philosophy, its principles, and how to apply them in modern life.",
}

interface Article {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  image?: string
}

function getArticles(): Article[] {
  const articlesDirectory = path.join(process.cwd(), "app/blog")
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        author: data.author,
        date: data.date,
        image: data.image,
      }
    })

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default function BlogPage() {
  const articles = getArticles()

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-gradient">TrueStoic Blog</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="overflow-hidden rounded-lg shadow-md bg-card">
            <Link href={`/blog/${article.slug}`}>
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold">{article.title}</h2>
                <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.author}</span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}