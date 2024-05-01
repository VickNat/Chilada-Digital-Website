"use client"
import FooterDark from "../components/FooterDark"

export default function ServicesLayout({
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
