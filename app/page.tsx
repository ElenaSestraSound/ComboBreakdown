import NavBar from "./nav-bar/nav-bar";

export default function Home () {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <NavBar></NavBar>
      <main>
        <div className="h-full flex items-center justify-center">
          <p>Hello \/\/</p>
        </div>
      </main>
    </div>
  );
}
