import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <a>
          <h1 className="text-3xl">Backlog Blitz</h1>
        </a>
      </Link>
      <div>
        <Link href="/signup">
          <a className="btn">Sign Up</a>
        </Link>
        <Link href="/login">
          <a className="btn">Log In</a>
        </Link>
        <Link href="/user-dashboard">
          <a className="btn">User Dashboard</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
