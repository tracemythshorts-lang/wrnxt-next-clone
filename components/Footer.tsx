import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tighter text-black dark:text-white">
              WR Next<span className="text-gray-400">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Building the future of digital experiences with clean, modern architecture.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Integrations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} WR Next. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
