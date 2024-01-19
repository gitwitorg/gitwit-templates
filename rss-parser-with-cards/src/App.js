import React, { useState, useEffect } from 'react'
import Parser from 'rss-parser'

const parser = new Parser()

function NewsItem({ title, link, description }) {
  return (
    <div className="bg-white p-4 border rounded-md shadow-md">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      </a>
      <p>{description}</p>
    </div>
  )
}

export default function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')
      setNews(feed.items)
    }
    fetchNews()
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow-md w-full">
        <h1 className="text-2xl font-semibold text-center">New York Times News</h1>
      </header>
      <main className="py-8 px-4 flex flex-col items-center gap-4 max-w-4xl w-full">
        {news.map((item) => (
          <NewsItem key={item.link} title={item.title} link={item.link} description={item.contentSnippet} />
        ))}
      </main>
      <footer className="py-4 bg-white shadow-md w-full text-center">
        <p>Made with ❤️ by [Your Name]</p>
      </footer>
    </div>
  )
}