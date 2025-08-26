const { render } = require("@forge/ui");

const ForgeUI = require("@forge/ui");

const App = () => {
  return ForgeUI.render(
    <ForgeUI.Text>
      SLA Time and Report Deviations Widget
    </ForgeUI.Text>
  );
};

const config = {
  app: App
};

module.exports = config;