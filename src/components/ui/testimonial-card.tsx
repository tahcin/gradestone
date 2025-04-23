import { cn } from "@/lib/utils"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ 
  author,
  text,
  href 
}: TestimonialCardProps) {
  const CardWrapper = href ? 
    (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block w-[320px] rounded-xl bg-white/5 p-6 shadow-xl backdrop-blur-lg",
          "dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-800/80",
          "transition-colors duration-200"
        )}
        {...props}
      />
    ) :
    (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div 
        className={cn(
          "w-[320px] rounded-xl bg-white/5 p-6 shadow backdrop-blur-lg",
          "dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
        )}
        {...props}
      />
    )

  return (
    <CardWrapper>
      <div className="flex items-start gap-4"> {/* Removed justify-center */}
        <AvatarPrimitive.Root className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <AvatarPrimitive.Image
            src={author.avatar}
            alt={author.name}
            className="aspect-square h-full w-full"
          />
          <AvatarPrimitive.Fallback
            className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {author.name.split(' ').map(n => n[0]).join('')}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        <div className="flex-1 text-left"> {/* Changed text alignment to left */}
          <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">{author.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{author.handle}</div>
        </div>
      </div>

      <div className="mt-4 text-left text-gray-600 dark:text-gray-300"> {/* Ensured text is left-aligned */}
        {text}
      </div>
    </CardWrapper>
  )
}