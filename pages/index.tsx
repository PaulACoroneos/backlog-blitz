import Head from "next/head";
import ModalLogin from "../components/modal/modal.login";
import ModalSignUp from "../components/modal/modal.signup";

export default function Home() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Head>
        <title>Backlog Blitz</title>
      </Head>
      <main className="px-4">
        <header className="p-4 grid grid-cols-2 w-full bg-slate-700 rounded-lg">
          <h1 className="text-4xl text-amber-500">Backlog Blitz</h1>
          <div className="text-white justify-end text-xl flex items-center space-x-2">
            <ModalSignUp />
            <ModalLogin />
          </div>
        </header>
        <section className="px-4">
          <h2 className="text-blue-300 text-3xl py-4">
            Welcome to backlog blitz
          </h2>
          <div className="text-white grid grid-cols-2 w-full space-x-4 ">
            <div className="bg-slate-700 rounded-lg p-4">
            <p>
              Backlog blitz is a competition you (or your friends) may tackle
              together should you choose.
            </p>
            <p>
              First create a new blitz. Then, define a range of time in which
              the blitz runs. Add games, books, movies, etc.
            </p>
            <p>Complete media and share your success!</p>
            </div>
            <div>column 2 content (tbd)</div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-700 p-4 rounded-lg mx-4 grid grid-cols-2 sticky top-[100vh]">
        <span className="text-amber-500">Copyright 2022 Paul Coroneos</span>
        <div className='text-end'>
          <a
            className="text-secondary hover:text-primary"
            href="https://github.com/PaulACoroneos"
          >
            Github
          </a>{" "}
          <a
            className="text-secondary hover:text-primary"
            href="https://twitter.com/pacman326"
          >
            Twitter
          </a>{" "}
          <a
            className="text-secondary hover:text-primary"
            href="https://www.linkedin.com/in/paulacoroneos/"
          >
            LinkedIn
          </a>{" "}
          <a
            className="text-secondary hover:text-primary"
            rel="me"
            href="https://mstdn.social/@pacman326"
          >
            Mastodon
          </a>{" "}
          <a
            className="text-secondary hover:text-primary"
            rel="me"
            href="https://www.twitch.tv/pacman326"
          >
            Twitch
          </a>
        </div>
      </footer>
    </div>
  );
}
