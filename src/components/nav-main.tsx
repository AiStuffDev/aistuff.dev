"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function NavMain() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/stuff"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/stuff" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Stuff
        </Link>
        <Link
          href="/tags"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/stuff" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Tags
        </Link>
      </nav>
    </div>
  )
}
