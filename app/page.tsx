import Image from "next/image"
import Link from "next/link"
import { InfiniteTagScroll } from "@/components/InfiniteTagScroll"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Quote of the Day */}
      <section className="relative flex items-center justify-center py-20 overflow-hidden">
        <div className="container z-10 px-4 mx-auto text-center">
          {/* <Image src="/scroll-logo.svg" alt="TrueStoic Logo" width={100} height={100} className="mx-auto mb-8" /> */}
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-gradient">Quote of the Day</h1>
          <blockquote className="mb-8 text-2xl italic md:text-3xl">
            "You have power over your mind - not outside events. Realize this, and you will find strength."
          </blockquote>
          <p className="text-xl md:text-2xl">- Marcus Aurelius</p>
        </div>
      </section>

      {/* Stoicism Tags Ticker */}
      <InfiniteTagScroll />

      {/* Key Stoic Principles */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gradient">Key Stoic Principles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Virtue", description: "The highest good and the foundation of all Stoic ethics." },
              { title: "Logic", description: "The method for gaining knowledge and understanding the world." },
              { title: "Physics", description: "The study of the natural world and our place in it." },
            ].map((principle, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md bg-card">
                <h3 className="mb-4 text-xl font-semibold">{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gradient">Latest News</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Stoicism in Modern Life",
                image: "/placeholder.svg?height=200&width=400",
                excerpt: "How ancient wisdom applies to contemporary challenges.",
                slug: "stoicism-in-modern-life",
              },
              {
                title: "Famous Stoic Quotes Explained",
                image: "/placeholder.svg?height=200&width=400",
                excerpt: "Diving deep into the meaning behind popular Stoic sayings.",
                slug: "famous-stoic-quotes-explained",
              },
              {
                title: "Practicing Stoicism Daily",
                image: "/placeholder.svg?height=200&width=400",
                excerpt: "Simple exercises to incorporate Stoic principles into your routine.",
                slug: "practicing-stoicism-daily",
              },
            ].map((article, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md bg-card">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
                  <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="text-primary hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="px-6 py-2 transition duration-300 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      {/* <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gradient">Featured Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* Subscribe to Our Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gradient">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-xl">Stay updated with the latest Stoic wisdom and practices.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 transition duration-300 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

