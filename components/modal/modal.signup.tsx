import Modal from "./modal";

export default function ModalSignUp(props) {
  return (
    <Modal
      buttonLabel="Sign Up"
      buttonClassName="p-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-500 rounded"
      title="Sign Up for Backlog Blitz"
      titleClassName="text-amber-500 text-bold border-amber-500"
    >
      <form className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="text-xl block text-gray-700 font-semibold mb-2">
            <span className="text-amber-500">Your Name</span>
            <input
              type="text"
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
            />
          </label>
          <label className="text-xl block text-gray-700 font-semibold mb-2">
            <span className="text-amber-500">Email</span>
            <input
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
            />
          </label>
          <label className="text-xl block text-gray-700 font-semibold mb-2">
            <span className="text-amber-500">Password</span>
            <input
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
            />
          </label>
          <label className="text-xl block text-gray-700 font-semibold mb-2">
            <span className="text-amber-500">Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-300 active:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
}
