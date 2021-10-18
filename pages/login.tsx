import Layout from "../components/layout";

const Login: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <div className="flex justify-between items-center pt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input className="btn" type="submit" />
          </label>
          <a href="">Forgot your password?</a>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
