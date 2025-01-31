"use client"

import { useEffect, useState } from "react"

const tags = [
  "Virtue",
  "Wisdom",
  "Justice",
  "Courage",
  "Self-Control",
  "Acceptance",
  "Mindfulness",
  "Resilience",
  "Temperance",
  "Fortitude",
  "Prudence",
  "Discipline",
  "Gratitude",
  "Humility",
  "Perseverance",
]

export function InfiniteTagScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % (tags.length * 150))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-muted py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        {tags.concat(tags).map((tag, index) => (
          <span key={index} className="mx-4 text-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

