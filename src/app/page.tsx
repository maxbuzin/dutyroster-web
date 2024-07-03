import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full flex-col items-center bg-gray-700 text-gray-100">
      <header className="fixed left-0 right-0 top-0 z-50 w-full shadow-lg">
        <Header />
      </header>
      <div className="mt-24 flex min-h-full w-full max-w-7xl flex-col items-center gap-20 px-5 py-10">
        <section id="hero">
          <Hero />
        </section>
        <section
          id="main"
          className="mx-auto w-full max-w-4xl"
        >
          <ul className="grid gap-5 md:grid-cols-2 [&>*]:rounded [&>*]:bg-gradient-to-t [&>*]:from-gray-300 [&>*]:to-gray-200 [&>*]:p-4 [&>*]:text-gray-600 [&>*]:shadow-lg">
            <li>
              <h2>Secure Login</h2>
              <p>
                Exclusive access for managers and
                supervisors
              </p>
            </li>
            <li>
              <h2>Event Registration</h2>
              <p>
                Include name, link, image,
                duration and more.
              </p>
            </li>
            <li>
              <h2>Location Link</h2>
              <p>
                Facilitate access to the
                locations.
              </p>
            </li>
            <li>
              <h2>Staff Scheduling</h2>
              <p>Select and filter you staff.</p>
            </li>
            <li>
              <h2>Flexible Editing</h2>
              <p>Edit your events anytime.</p>
            </li>
            <li>
              <h2>PDF Generation</h2>
              <p>Create detailed event PDFs</p>
            </li>
          </ul>
        </section>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </main>
  );
}
