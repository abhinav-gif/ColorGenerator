import { useState } from "react";
import Colors from "./Colors";
import Form from "./Form";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [color, setColor] = useState("#30F3F0");
  const [shades, setShades] = useState(10);
  return (
    <main>
      <Form color={color} setColor={setColor} setShades={setShades} />
      <Colors color={color} shades={shades} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
