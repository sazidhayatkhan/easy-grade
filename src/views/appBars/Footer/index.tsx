import React from "react";

type Props = {};

const FooterUI = (props: Props) => {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 dark:bg-base-300 text-black p-4">
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
