/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import React from "react";

const Footer = (props: { simple?: boolean }): React.ReactElement => (
  <div
    className={
      props.simple ? undefined : "bg-black border-t border-b border-gray-200"
    }
  >
    <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <Link
            href="https://github.com/xinuxuz"
            className="text-base leading-6 text-white hover:text-gray-200"
          >
            Xinux
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            href="https://desktop.genemator.uz"
            className="text-base leading-6 text-white hover:text-gray-200"
          >
            BSBA
          </Link>
        </div>
      </nav>
      <div className="mt-9 flex justify-center">
        <Link
          href="https://github.com/genemators"
          className="text-white hover:text-gray-300"
        >
          <span className="sr-only">GitHub</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href="https://t.me/genemators"
          className="ml-6 text-white hover:text-gray-300"
        >
          <span className="sr-only">Telegram</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.572266 3.0117188C20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875C19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312L3.2695312 9.9960938C2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672C2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062L6.9472656 14.757812C7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906C8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594C9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812C10.165656 20.007812 10.484625 19.801641 10.640625 19.681641L12.970703 17.710938L15.800781 20.328125C15.909781 20.439125 16.486719 21 17.261719 21C18.228719 21 18.962234 20.195016 19.115234 19.416016C19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625C22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531C21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875C19.533156 7.061875 17.478016 17.378234 17.166016 18.865234L13.029297 15.039062L10.222656 17.416016L11 14.375C11 14.375 16.362547 8.9468594 16.685547 8.6308594C16.945547 8.3778594 17 8.2891719 17 8.2011719C17 8.0841719 16.939781 8 16.800781 8C16.675781 8 16.506016 8.1197812 16.416016 8.1757812C15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391L4.53125 11.636719L6.21875 10.927734C10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z" />
          </svg>
        </Link>
      </div>
      <div className="mt-9 flex justify-center text-center">
        <Link
          href="https://github.com/genemators/website/blob/master/LICENSE"
          className="hover:underline"
        >
          V3 | MPL-2.0 Licensed | Copyright © 2017-{new Date().getFullYear()}{" "}
          Genemator Gen 1.0
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
