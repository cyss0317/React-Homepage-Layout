export default function Footer() {
  return (
    <footer className="slide-in-from-left z-negative fixed bottom-0 w-full">
      <div className="footer-container text-sm text-zinc-50 bg-emerald-950 flex flex-col justify-center items-center">
        <p>&copy; Professional Financial Planner. All rights reserved.</p>
        <ul className="flex gap-5">
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Terms of Service</a>
          </li>
          <li className="hover:underline hover:text-zinc-400">
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
