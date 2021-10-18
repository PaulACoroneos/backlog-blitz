import Layout from "../components/layout";

const Signup: React.FC = () => {
  return (
    <Layout>
      <h2>Sign Up</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Display Name:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
          <input className="btn" type="submit" value="Sign up" />
        </label>
      </form>
    </Layout>
  );
};

export default Signup;
