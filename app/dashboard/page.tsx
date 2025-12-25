"use client"

import Container1 from "@/components/containers/container-1"
import Container2 from "@/components/containers/container-2"
import Container3 from "@/components/containers/container-3"
import Container4 from "@/components/containers/container-4"
import Container5 from "@/components/containers/container-5"
import Container6 from "@/components/containers/container-6"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
        <FadeIn delay={0.1}>
          <Container1 />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Container2 />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Container3 />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Container4 />
        </FadeIn>
        <FadeIn delay={0.5}>
          <Container5 />
        </FadeIn>
        <FadeIn delay={0.6}>
          <Container6 />
        </FadeIn>
      </div>
    </PageTransition>
  )
}
