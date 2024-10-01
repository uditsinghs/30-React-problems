import { useState } from "react";

const Three = () => {
  const [text, setText] = useState("gf");
  return (
    <div className="text-center">
      <p>Text writer</p>
      <p className="mb-6">{text}</p>
      <input
        type="text"
        placeholder="Enter anything here..!"
        value={text}
        className="text-zinc-700"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Three;
