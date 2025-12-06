

// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
// import { cn } from "../../lib/utils" // Adjust path if needed
// import { Grid3X3, Layers, LayoutList, Hand } from "lucide-react"

// const layoutIcons = {
//   stack: Layers,
//   grid: Grid3X3,
//   list: LayoutList,
// }

// const SWIPE_THRESHOLD = 50

// export function MorphingCardStack({
//   cards = [],
//   className,
//   defaultLayout = "stack",
//   onCardClick,
// }) {
//   const [layout, setLayout] = useState(defaultLayout)
//   const [expandedCard, setExpandedCard] = useState(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)

//   if (!cards || cards.length === 0) {
//     return null
//   }

//   const handleDragEnd = (event, info) => {
//     const { offset, velocity } = info
//     const swipe = Math.abs(offset.x) * velocity.x

//     if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
//       setActiveIndex((prev) => (prev + 1) % cards.length)
//     } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
//       setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
//     }
//     setIsDragging(false)
//   }

//   const getStackOrder = () => {
//     const reordered = []
//     for (let i = 0; i < cards.length; i++) {
//       const index = (activeIndex + i) % cards.length
//       reordered.push({ ...cards[index], stackPosition: i })
//     }
//     return reordered.reverse()
//   }

//   const getLayoutStyles = (stackPosition) => {
//     switch (layout) {
//       case "stack":
//         return {
//           top: stackPosition * 10, // Increased spacing slightly for visibility
//           left: stackPosition * 0, // Centered
//           zIndex: cards.length - stackPosition,
//           scale: 1 - stackPosition * 0.05,
//           y: stackPosition * 5, // Small vertical offset
//         }
//       case "grid":
//         return { top: 0, left: 0, zIndex: 1, rotate: 0, scale: 1, y: 0 }
//       case "list":
//         return { top: 0, left: 0, zIndex: 1, rotate: 0, scale: 1, y: 0 }
//       default:
//         return {}
//     }
//   }

//   const containerStyles = {
//     // Reduced height as requested
//     stack: "relative h-72 w-72 md:h-80 md:w-80", 
//     grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
//     list: "flex flex-col gap-4 max-w-2xl mx-auto",
//   }

//   const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

//   return (
//     <div className={cn("space-y-8 p-4", className)}>
//       {/* Layout Toggle */}
//       <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md p-1.5 w-fit mx-auto shadow-lg z-50 relative">
//         {Object.keys(layoutIcons).map((mode) => {
//           const Icon = layoutIcons[mode]
//           return (
//             <button
//               key={mode}
//               onClick={() => setLayout(mode)}
//               className={cn(
//                 "rounded-full p-2.5 transition-all duration-300",
//                 layout === mode
//                   ? "bg-emerald-500/20 text-emerald-400 shadow-inner"
//                   : "text-slate-400 hover:text-white hover:bg-white/5",
//               )}
//               aria-label={`Switch to ${mode} layout`}
//             >
//               <Icon className="h-4 w-4" />
//             </button>
//           )
//         })}
//       </div>

//       {/* Cards Container */}
//       <LayoutGroup>
//         <motion.div layout className={cn(containerStyles[layout], "mx-auto relative")}>
//           <AnimatePresence mode="popLayout">
//             {displayCards.map((card) => {
//               const styles = getLayoutStyles(card.stackPosition)
//               const isExpanded = expandedCard === card.id
//               const isTopCard = layout === "stack" && card.stackPosition === 0

//               return (
//                 <motion.div
//                   key={card.id}
//                   layoutId={card.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                     ...styles,
//                   }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   drag={isTopCard ? "x" : false}
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragStart={() => setIsDragging(true)}
//                   onDragEnd={handleDragEnd}
//                   onClick={() => {
//                     if (isDragging) return
//                     setExpandedCard(isExpanded ? null : card.id)
//                     onCardClick && onCardClick(card)
//                   }}
//                   className={cn(
//                     "group relative overflow-hidden rounded-3xl",
//                     // Change bg to dark grey (zinc-900)
//                     "bg-zinc-900",
//                     layout === "stack" && "absolute w-full h-full shadow-2xl origin-bottom",
//                     layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
//                     (layout === "grid" || layout === "list") && "w-full min-h-[200px] cursor-pointer"
//                   )}
//                 >
//                   {/* --- GLOWING GREEN BORDER ANIMATION --- */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#10b981_50%,#000000_100%)]" />
//                   </div>
                  
//                   {/* Inner Content Card */}
//                   <div className="absolute inset-[1px] rounded-[23px] bg-zinc-900/95 backdrop-blur-xl p-6 flex flex-col h-full">
                    
//                     {/* Header: Icon + Title */}
//                     <div className="flex items-center gap-4 mb-3">
//                       {card.icon && (
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 shadow-inner">
//                           {card.icon}
//                         </div>
//                       )}
//                       <div>
//                         <h3 className="font-semibold text-slate-100 text-lg tracking-tight">{card.title}</h3>
//                         <p className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-mono">{card.badge}</p>
//                       </div>
//                     </div>

//                     {/* Body: Description */}
//                     <div className={cn(
//                       "flex-1 text-slate-400 text-sm leading-relaxed",
//                       layout === "stack" && !isExpanded && "line-clamp-4"
//                     )}>
//                       {card.description}
//                     </div>

//                     {/* Footer: Swipe Hint (Only on Top Card in Stack Mode) */}
//                     {isTopCard && layout === "stack" && (
//                       <div className="mt-auto pt-4 flex flex-col items-center gap-2 opacity-60">
//                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500 animate-pulse">
//                             <Hand className="w-3 h-3 rotate-12" />
//                             <span>Swipe to navigate</span>
//                          </div>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </motion.div>
//       </LayoutGroup>

//       {/* Pagination Dots (Visual Indicator) */}
//       {layout === "stack" && cards.length > 1 && (
//         <div className="flex justify-center gap-2 mt-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={cn(
//                 "h-1.5 rounded-full transition-all duration-300",
//                 index === activeIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-700 hover:bg-zinc-600",
//               )}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { cn } from "../../lib/utils" 
import { Grid3X3, Layers, LayoutList, Hand } from "lucide-react"

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}) {
  const [layout, setLayout] = useState(defaultLayout)
  const [expandedCard, setExpandedCard] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) return null

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -10000) {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse()
  }

  const getLayoutStyles = (stackPosition) => {
    if (layout === "stack") {
      return {
        left: stackPosition * 14,
        scale: 1 - stackPosition * 0.05,
        zIndex: cards.length - stackPosition,
      }
    }
    return { top: 0, left: 0, zIndex: 1, scale: 1 }
  }

  const containerStyles = {
    // FIX: Increased height significantly (340px -> 420px) to prevent overlap
    stack: "relative h-[420px] w-[300px] md:h-[450px] md:w-[340px]", 
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    list: "flex flex-col gap-3 max-w-3xl mx-auto",
  }

  const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("space-y-8 p-4", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md p-1.5 w-fit mx-auto shadow-lg z-50 relative">
        {Object.keys(layoutIcons).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-full p-2.5 transition-all duration-300",
                layout === mode ? "bg-emerald-500/20 text-emerald-400 shadow-inner" : "text-slate-400 hover:text-white hover:bg-white/5",
              )}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      {/* Cards Container */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto relative")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0
              
              const showTags = (layout === "stack" || layout === "grid") && card.tags;
              const showText = layout === "list" || (!showTags && card.description);

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, ...styles }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick && onCardClick(card)
                  }}
                  className={cn(
                    "group relative overflow-hidden bg-zinc-900 border border-white/5",
                    (layout === "stack" || layout === "grid") && "rounded-3xl",
                    layout === "stack" && "absolute w-full h-full shadow-2xl origin-bottom cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full min-h-[240px] cursor-pointer",
                    layout === "list" && "rounded-xl w-full cursor-pointer min-h-[100px]" 
                  )}
                >
                  {/* Fluid Glow Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                     <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(16,185,129,0.1)_25%,rgba(34,211,238,0.1)_50%,rgba(16,185,129,0.1)_75%,transparent_100%)] blur-2xl" />
                  </div>

                  {/* Card Content */}
                  <div className={cn(
                    "relative z-10 flex h-full",
                    layout === "list" ? "flex-row items-center p-4 gap-5" : "flex-col p-6"
                  )}>
                    
                    {/* Header */}
                    <div className={cn(
                      "flex shrink-0", 
                      layout === "list" ? "items-center gap-5 w-1/3 min-w-[200px]" : "items-center gap-4 mb-5"
                    )}>
                      {card.icon && (
                        <div className={cn(
                          "flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 shadow-inner",
                          layout === "list" ? "h-10 w-10 rounded-lg" : "h-12 w-12"
                        )}>
                          {card.icon}
                        </div>
                      )}
                      <div>
                        <h3 className={cn("font-bold text-slate-100 tracking-tight", layout === "list" ? "text-base" : "text-xl")}>
                          {card.title}
                        </h3>
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-mono mt-0.5">
                          {card.badge}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 min-w-0">
                      {showTags && (
                         <div className="flex flex-wrap gap-2 content-start">
                           {card.tags.map((tag) => (
                             <span key={tag} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
                               {tag}
                             </span>
                           ))}
                         </div>
                      )}
                      {showText && (
                        <div className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                           {card.description}
                        </div>
                      )}
                    </div>

                    {/* Footer Section */}
                    {layout !== "list" && (
                        // Used flex-col here to ensure distinct vertical stacking
                        <div className="mt-auto pt-4 w-full flex flex-col gap-4">
                           <div className="border-t border-white/5 pt-4">
                               <p className="text-xs font-mono font-medium text-emerald-400 truncate">
                                 › {card.footer}
                               </p>
                           </div>
                           
                           {/* Swipe Hint - Rendered as a Block element below footer text */}
                           {isTopCard && layout === "stack" && (
                              <div className="flex justify-center opacity-60 pb-2">
                                 <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 animate-pulse">
                                    <Hand className="w-3.5 h-3.5 rotate-12" />
                                    <span>Swipe to navigate</span>
                                 </div>
                              </div>
                           )}
                        </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Pagination Dots */}
      {layout === "stack" && cards.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-800 hover:bg-zinc-700",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}