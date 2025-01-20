import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import { getListPage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Experience the Power of AI Assistance
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Meet our intelligent AI Assistant that helps you get instant answers, automate tasks, and make smarter decisions. Try it now by clicking the AI Assistant button above!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/agent"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Try AI Assistant
            </a>
            <a
              href="#features"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-teal-400">Instant Answers</h3>
            <p className="text-gray-300">Get immediate responses to your questions with our advanced AI technology.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-teal-400">Task Automation</h3>
            <p className="text-gray-300">Automate repetitive tasks and workflows to boost your productivity.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-teal-400">Smart Decisions</h3>
            <p className="text-gray-300">Make data-driven decisions with AI-powered insights and recommendations.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of professionals who are already leveraging our AI Assistant to transform their work and achieve better results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
