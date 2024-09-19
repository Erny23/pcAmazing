import * as components from "../components";

const Error404 = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800">
        <components.default />
        <div className="text-5xl text-white">404</div>
      </main>
    </>
  )
}

export default Error404
