import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh] flex-col">
      <h1 className="mb-6 text-6xl font-bold">Render examples</h1>
      <nav className="flex flex-col gap-4 text-2xl ">
        <Link
          href={"/csr"}
          className="border px-8 py-4 rounded-3xl hover:bg-gray-100 ">
          CSR - Client Side Rendering
        </Link>
        <Link
          href={"/ssg"}
          className="border px-8 py-4 rounded-3xl hover:bg-gray-100">
          SSG - Static Site Generetion
        </Link>
        <Link
          href={"/ssr"}
          className="border px-8 py-4 rounded-3xl hover:bg-gray-100">
          SSR - Server Side Rendering
        </Link>
        <Link
          href={"/csr-in-ssr"}
          className="border px-8 py-4 rounded-3xl hover:bg-gray-100">
          CSR-in-SSR
        </Link>
        <Link
          href={"/ssr-in-csr"}
          className="border px-8 py-4 rounded-3xl hover:bg-gray-100">
          SSR-in-CSR
        </Link>
      </nav>
    </main>
  );
}
