import { useEffect, useRef, useState } from "react"

export const Reveal = ({ children, className = "", delay = 0 }) => {
  const revealRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const scrollDirection = useRef("down")
  const lastScrollY = useRef(0)

  useEffect(() => {
    const element = revealRef.current
    if (!element) return undefined

    lastScrollY.current = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollDirection.current = currentScrollY >= lastScrollY.current ? "down" : "up"
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDirection.current === "down") {
          setIsVisible(true)
        }

        if (!entry.isIntersecting && scrollDirection.current === "up") {
          setIsVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={revealRef}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  )
}
