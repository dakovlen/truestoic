"use client"

import { useEffect, useState } from "react"

export function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<{ id: string; title: string }[]>([])

  useEffect(() => {
    const doc = new DOMParser().parseFromString(content, "text/html")
    const headings = Array.from(doc.querySelectorAll("h2"))
    setToc(headings.map((h, i) => ({ id: `section-${i}`, title: h.textContent || "" })))
  }, [content])

  return (
    <nav className="md:w-64 mb-8 md:mb-0">
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-primary hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

