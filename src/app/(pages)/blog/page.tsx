"use client";

import { motion } from "motion/react";
import BlogList from '@/components/blog-page-ui/blog-list';

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <BlogList />
      </motion.div>
    </main>
  );
}