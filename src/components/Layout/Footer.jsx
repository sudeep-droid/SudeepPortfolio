import React from 'react'

export default function Footer() {
  return (
    <footer className="pb-5 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Made with ☕. All rights reserved.</p>
      </div>
    </footer>
  )
}
