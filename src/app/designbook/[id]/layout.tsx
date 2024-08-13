import Header from "./Header"

export default function DesignbookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  )
}