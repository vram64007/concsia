export default function MyFooter() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-3 md:p-4 border-t shadow md:flex md:items-center md:justify-between bg-gray-800 border-gray-600">
      <span className="text-sm sm:text-center text-gray-400">made with ❤️</span>
      <ul className="flex flex-wrap items-center text-sm font-medium text-gray-400">
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdracOvuFwH_wR2x84cv2GH5E6hJu1klnWAJz4dooaohA34TA/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline me-4 md:me-6"
          >
            feedback
          </a>
        </li>
        <li>
          <a href="mailto:vram64007@gmail.com" className="hover:underline">
            support
          </a>
        </li>
      </ul>
    </footer>
  );
}
