import Layout from "../components/layout";
import cx from "classnames";

//WIP. NEED TO FORMALIZE THIS SCHEMA
const fakeData = [
  { name: "final fantasy xiii", status: "not_started" },
  { name: "final fantasy xiii-2", status: "complete" },
  { name: "final fantasy xiii-3", status: "in_progress" },
];

//WIP crude for now until theming or other better system is determined
const colorPicker = {
  not_started: "bg-red-200",
  in_progress: "bg-blue-200",
  complete: "bg-green-200",
};

const UserDashboard: React.FC = () => {
  return (
    <Layout>
      <h2>User Dashboard</h2>
      <h3>Blitz Progress</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Game 1</th>
            <th className="px-4 py-2">Game 2</th>
            <th className="px-4 py-2">Game 3</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
            {fakeData.map((game) => (
              <td
                className={cx(
                  "border px-4 py-2 font-medium",
                  colorPicker[game.status]
                )}
                key="game.name"
              >
                {game.name}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default UserDashboard;
