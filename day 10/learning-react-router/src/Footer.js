function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between bg-blue-200 text-gray-700 py-4 px-6 text-sm">
        <h3 className="flex items-center gap-1 font-medium">
          Made with <span className="text-red-500">&hearts;</span> by Deepak
        </h3>
        <div className="flex gap-6">
          <a href="/contact-us" className="hover:underline hover:text-purple-600 transition">
            Contact Us
          </a>
          <a href="/terms" className="hover:underline hover:text-purple-600 transition">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
