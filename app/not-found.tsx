import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <>
      <main className="relative isolate min-h-[100lvh] grid place-items-center">
        <Image
          fill
          alt=""
          src="/pin.webp"
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-4  text-center py-10 lg:px-12 bg-background/80 rounded-md">
          <p className="text-lg/8 font-semibold text-text">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-text sm:text-7xl">
            Page not found!
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-text/70 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-lg/7 font-semibold text-text hover:text-secondary">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
