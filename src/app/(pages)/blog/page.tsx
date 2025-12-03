import BlogList from '@/components/blog-page-ui/blog-list'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Blog - Araby Hossain Abid",
  description: "Insights, tutorials, and thoughts on modern web development, full-stack technologies, and software engineering.",
  keywords: ["Blog", "Web Development", "Programming", "Tutorials", "Tech"],
};

export default function BlogPage() {
  return (
    <main>
      <BlogList />
    </main>
  )
}