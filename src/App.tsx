import { FC, useContext } from "react";
import { MacKeyBoard } from "./widget/keyboard";

import TextChecker from "./widget/text-checker";
import Statistics from "./widget/statistics";

import generateText from "./generator/text";
import globalContext from "./context/global";
import HiddenInput from "./widget/hidden-input";

const App: FC = () => {
  const { text, setText } = useContext(globalContext);

  return (
    <div className="f-col a-c">
      <Statistics />
      <TextChecker text={text} />
      <HiddenInput
        onFinished={() => {
          setText(generateText({}));
        }}
      />
      <MacKeyBoard />
      <h1 style={{ bottom: 0, position: "absolute",color: "#fff" }}>
        ©️{" "}
        <a
          href="https://rhine-one.vercel.app"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          RHINE
        </a>
      </h1>
    </div>
  );
};

export default App;
