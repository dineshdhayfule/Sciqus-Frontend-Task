"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
    children: ReactNode
    delay?: number
    duration?: number
}

export default function FadeIn({ children, delay = 0, duration = 0.5 }: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
