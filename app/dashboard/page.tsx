"use client"

import Container1 from "@/components/containers/container-1"
import Container2 from "@/components/containers/container-2"
import Container3 from "@/components/containers/container-3"
import Container4 from "@/components/containers/container-4"
import Container5 from "@/components/containers/container-5"
import Container6 from "@/components/containers/container-6"

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  )
}
