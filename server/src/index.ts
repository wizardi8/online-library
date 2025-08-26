import { render } from "@forge/ui";
import ForgeUI, { CustomField, Text } from "@forge/ui";

const App = () => {
  return (
    <CustomField>
      <Text>Your SLA widget content here</Text>
    </CustomField>
  );
};

export const run = render(<App />);