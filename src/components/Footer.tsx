export default function Footer() {
  return (
    <footer className="flex h-12 w-full items-center justify-center bg-gray-700 text-center">
      <p className="text-light text-sm text-gray-400">
        DutyRoster 2024. Developed by{" "}
        <a
          href="https://maxbuzin.com"
          target="_blank"
          className="underline duration-300 hover:text-gray-100"
        >
          maxbuzin.com
        </a>
        .
      </p>
    </footer>
  );
}
