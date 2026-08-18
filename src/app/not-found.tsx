export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3e6d1] px-6">
      <div className="text-center">
        <img
  src="/images/logo/sleeper-sales-logo.png"
  alt="Sleeper Sales"
  className="mx-auto h-20 w-auto object-contain"
/>

        <h1 className="display-font mt-10 text-7xl font-black text-[#321a0c]">
          404
        </h1>

        <h2 className="display-font mt-2 text-3xl font-bold text-[#633718]">
          PAGE NOT FOUND
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#5a4532]">
          Sorry, the page you&apos;re looking for could not be found.
        </p>

        <a
          href="/"
          className="mt-7 inline-flex items-center justify-center border border-[#805022] bg-[#5b2d12] px-6 py-3 text-xs font-bold tracking-[0.08em] text-[#f8ead4] transition hover:-translate-y-0.5"
        >
          RETURN HOME
        </a>
      </div>
    </main>
  );
}