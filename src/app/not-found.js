import Link from "next/link"

export default function NotFound() {
  return (
    <main className="error-page">
        <div className="error-container">
          <h1>Oh dear!</h1>
          <h3>It seems that you have broken the matrix to my website.</h3>
          <Link href="/" className="btn">Go back to the homepage</Link>
        </div>
    </main>
  )
}
