"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { CheckCircle, Clock, Circle } from "lucide-react"

export interface TimelineItem {
  title: string
  description: string
  date?: string
  image?: string
  status?: "completed" | "current" | "upcoming"
  category?: string
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const getStatusConfig = (status: TimelineItem["status"]) => {
  const configs = {
    completed: {
      progressColor: "bg-green-500",
      borderColor: "border-green-500/20",
      badgeBg: "bg-green-500/10",
      badgeText: "text-green-700 dark:text-green-300"
    },
    current: {
      progressColor: "bg-blue-600 dark:bg-blue-400",
      borderColor: "border-blue-600/20 dark:border-blue-400/20",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-800 dark:text-blue-200"
    },
    upcoming: {
      progressColor: "bg-gray-300 dark:bg-gray-700",
      borderColor: "border-gray-300/20 dark:border-gray-700/20",
      badgeBg: "bg-gray-100 dark:bg-gray-800/30",
      badgeText: "text-gray-600 dark:text-gray-400"
    }
  }
  
  return configs[status || "upcoming"]
}

const getStatusIcon = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
        <p className="text-center text-muted-foreground">No timeline items to display</p>
      </div>
    )
  }

  return (
    <section 
      className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
      role="list"
      aria-label="Timeline of events and milestones"
    >
      <div className="relative">
        <div 
          className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-6 top-0 w-px bg-blue-500 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ 
            scaleY: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="space-y-12 relative">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status)
            const IconComponent = getStatusIcon(item.status)
            
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
                role="listitem"
              >
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center border-4 border-gray-200 dark:border-gray-800 relative z-10">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <IconComponent 
                          className="w-6 h-6 text-gray-500" 
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Card className={cn(
                      "border transition-shadow duration-300 hover:shadow-lg",
                      config.borderColor
                    )}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          {item.title}
                        </h3>

                        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
