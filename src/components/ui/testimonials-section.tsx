import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

const defaultTestimonials = [
  {
    author: {
      name: "Priya Sharma",
      handle: "@priya_bba",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Gradestone's study materials and AI assistance helped me ace my Persuasive Communication course. The mindmaps are incredibly helpful!"
  },
  {
    author: {
      name: "Rahul Patel",
      handle: "@rahul_dbe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The IKS course materials are comprehensive and well-structured. GraDex AI's explanations make complex concepts easy to understand."
  },
  {
    author: {
      name: "Ananya Singh",
      handle: "@ananya_s",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The interactive quizzes and personalized feedback have significantly improved my understanding of Microeconomics principles."
  }
  
]

export function TestimonialsSection({ 
  title = "What Our Students Say",
  description = "Join thousands of BBA DBE students who are already excelling in their courses with Gradestone",
  testimonials = defaultTestimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white dark:bg-gray-800",
      "py-12 sm:py-24 px-0 text-gray-900 dark:text-white",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-800 dark:text-white sm:text-xl drop-shadow">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-1 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:10s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-infinite-scroll flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-infinite-scroll flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}-clone`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white dark:from-gray-800 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white dark:from-gray-800 sm:block" />
        </div>
      </div>
    </section>
  )
}