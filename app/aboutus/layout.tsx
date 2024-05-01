"use client"

import FooterWhite from "../components/FooterWhite"

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
      <FooterWhite />
    </>
  )
}
