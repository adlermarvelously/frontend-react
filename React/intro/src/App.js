import Paragraph from "./components/Paragraph";
import Anchor from "./components/Anchor";
import Image from "./components/Image";
import ImageProp from "./components/ImageProp";
import Popover from "./components/Popover";
import ChangableButton from "./components/ChangableButton";

import logo from "./logo.svg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageProp src={logo} />
        <Image />
        <Paragraph>Hello World!</Paragraph>
        <Paragraph>Developed by Afife Betül</Paragraph>
        <Anchor />
      </header>
      <section>
        <Popover buttonText="Click">Lorem ipsum dolar sit amet</Popover>
        <ChangableButton/>
      </section>
    </div>
  );
}

export default App;
