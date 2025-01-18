import AgentChat from "@layouts/AgentChat";
import { getListPage, getRegularPage } from "../lib/contentParser";

const Home = async () => {
  const agentPage = await getRegularPage("agent");

  return (
    <>
      <AgentChat data={agentPage} />
    </>
  );
};

export default Home;
