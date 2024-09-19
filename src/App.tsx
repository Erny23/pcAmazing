import { DarkThemeToggle } from "flowbite-react";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800">
      <div className="flex items-center">
        <h1 className="text-3xl text-white md:text-5xl">Flowbite <span className="text-teal-400">React</span> + <span className="text-blue-700">Vite</span></h1>
        <DarkThemeToggle className="text-white" />
      </div>
      <h2 className="rounded-md bg-gradient-to-r from-blue-700 to-teal-400 p-3 font-sans text-2xl font-light text-white md:text-3xl md:font-thin">PC Amazing</h2>
    </main>
  );
}

export default App;
