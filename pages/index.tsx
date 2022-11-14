import Head from "next/head";
import ModalLogin from "../components/modal/modal.login";
import ModalSignUp from "../components/modal/modal.signup";

export default function Home() {
  return (
    <div className="bg-slate-800 h-screen">
      <Head>
        <title>Backlog Blitz</title>
      </Head>
      <main className="h-screen px-4">
        <header className="py-4 grid grid-cols-2 w-full">
          <h1 className="text-4xl text-white">Backlog Blitz</h1>
          <div className="text-white justify-end text-xl flex items-center space-x-2">
            <ModalSignUp />
            <ModalLogin />
          </div>
        </header>
        <section>
          <h2>Welcome to backlog blitz</h2>
          <div className="text-white">
          <p>
            Backlog blitz is a competition you (or your friends) may tackle
            together should you choose.
          </p>
          <p>First create a new blitz</p>
          <p>Then define a range of time in which the blitz runs</p>
          <p>Add games, books, movies, etc.</p>
          <p>Complete media and share your success!</p>
          </div>
        </section>
      </main>
      <footer>
        Copyright 2022 Paul Coroneos
        <div>
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
