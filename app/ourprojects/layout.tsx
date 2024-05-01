"use client"
import FooterDark from "../components/FooterDark"

export default function ProjectsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
  return (
    <>
      {children}
      <FooterDark />
    </>
  )
}
