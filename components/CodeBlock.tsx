/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import Router from "next/router";
import Highlight, { Prism } from "prism-react-renderer";
import light from "prism-react-renderer/themes/ultramin";
import React, { useEffect, useLayoutEffect, useState } from "react";

(typeof global !== "undefined" ? global : (window as any)).Prism = Prism;

require("prismjs/components/prism-rust");
require("prismjs/components/prism-toml");

export interface CodeBlockProps {
  code: string;
  disablePrefixes?: boolean;
  language:
    | "javascript"
    | "typescript"
    | "jsx"
    | "tsx"
    | "json"
    | "yaml"
    | "markdown"
    | "bash"
    | "shell"
    | "text"
    | "rust"
    | "python"
    | "csharp"
    | "cpp"
    | "c"
    | "php"
    | "powershell"
    | "css"
    | "toml"
    | "wasm"
    | "makefile"
    | "dockerfile";
}

export const RawCodeBlock = ({
  code,
  language,
  className: extraClassName,
  disablePrefixes,
  enableLineRef = false,
}: CodeBlockProps & {
  className?: string;
  enableLineRef?: boolean;
}): React.ReactElement => {
  const [hashValue, setHashValue] = useState("");
  const codeDivClassNames = "token-line text-right select-none text-xs";
  if (enableLineRef) {
    useEffect(() => {
      Router.events.on("hashChangeComplete", (url: any) => {
        setHashValue(url.slice(url.indexOf("#")));
      });
      const { hash } = location;
      setHashValue(hash);
      return () => {
        Router.events.off("hashChangeComplete", () => {});
      };
    }, []);

    useLayoutEffect(() => {
      const parts = hashValue.split("-");
      if (parts.length > 1) {
        const hash = parts
          .map((e) => /([\d]+)/.exec(e)![0])
          .map((e) => parseInt(e, 10))
          .sort((a, b) => a - b)
          .map((e) => `L${e}`);
        if (hash.length) {
          const idEl = document.getElementById(hash[0]);
          if (idEl) {
            idEl.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
            return;
          }
        }
      }
    });
  }

  return (
    <Highlight
      Prism={Prism}
      theme={light}
      code={code}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      language={
        language === "shell" ? "bash" : language === "text" ? "diff" : language
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className + " flex overflow-y-auto " + (extraClassName ?? "")
          }
          style={{ ...style }}
        >
          {!disablePrefixes &&
            tokens.length === 1 &&
            (language === "bash" || language === "shell") && (
              <code className="pr-2 sm:pr-3">
                <div className={codeDivClassNames}>$</div>
              </code>
            )}
          {tokens.length > 1 && !disablePrefixes && (
            <code className="pr-2 sm:pr-3">
              {tokens.map((line, i) =>
                line[0]?.empty && i === tokens.length - 1 ? null : (
                  <div key={i + "l"} className={codeDivClassNames}>
                    {enableLineRef ? (
                      <Link id={`L${i + 1}`} href={`#L${i + 1}`}>
                        {i + 1}{" "}
                      </Link>
                    ) : (
                      i + 1
                    )}
                  </div>
                ),
              )}
            </code>
          )}
          <code>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              lineProps.className += " text-xs";
              if (
                enableLineRef &&
                hashValue &&
                ((arr, index) =>
                  Math.min(...arr) <= index && index <= Math.max(...arr))(
                  hashValue
                    .split("-")
                    .map((e) => /([\d]+)/.exec(e)![1])
                    .map((n) => parseInt(n, 10)),
                  i + 1,
                )
              ) {
                lineProps.className = `${lineProps.className} highlight-line`;
              }
              return line[0]?.empty && i === tokens.length - 1 ? null : (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                  {line[0]?.empty ? "\n" : ""}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

const CodeBlock = ({
  code,
  language,
  disablePrefixes,
}: CodeBlockProps): React.ReactElement => {
  return (
    <RawCodeBlock
      code={code}
      language={language}
      disablePrefixes={disablePrefixes}
      className="p-4"
    />
  );
};

export default CodeBlock;
