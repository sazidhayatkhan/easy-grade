import React from "react";

type Props = {};

const FooterUI = (props: Props) => {
  return (
    <div>
      <footer className="bg-gray-200 text-center text-black p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - 🌻 All right reserved by Suravee Khan (Scholastica) 🌻
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default FooterUI;
