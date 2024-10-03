import { useState } from "react";

const Fifteen = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="menu-logo">
        <button
          className="block md:hidden"
          onClick={() => setToggle(!toggle)}
          aria-expanded={toggle}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <div className={`menu-items ${toggle ? "block" : "hidden"} md:block`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li> {/* Fixed Typo */}
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Fifteen;
