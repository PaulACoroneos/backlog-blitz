import Modal from "./modal";

export default function ModalLogin(props) {
  return (
    <Modal
      buttonLabel="Login"
      buttonClassName="p-2 bg-blue-400 hover:bg-blue-300 active:bg-blue-300 rounded"
      title="Login to Backlog Blitz"
    >
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="text-xl block text-gray-700 font-bold mb-2">
            Email
            <input
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="text-xl block text-gray-700 font-bold mb-2">
            Password
            <input
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-300 active:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </Modal>
  );
}
