/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fileTypeFromURL, isReadme } from "../util/registry_utils";
import { RawCodeBlock } from "./CodeBlock";
import Markdown from "./Markdown";

function FileDisplay(props: {
  raw?: string;
  canonicalPath: string;
  sourceURL: string;
  baseURL: string;
  repositoryURL?: string | null;
}): React.ReactElement {
  const filetype = fileTypeFromURL(props.sourceURL);
  const segments = props.sourceURL.split("/");
  const filename = segments[segments.length - 1];

  return (
    <div className="shadow-sm rounded-lg border overflow-hidden bg-transparent">
      <div className="bg-transparent border-b py-2 px-4 flex justify-between">
        <div className="flex items-center">
          {isReadme(filename) && (
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6 text-white inline-block mr-2"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          )}
          <span className="font-medium text-white">
            {props.canonicalPath === location.pathname ? (
              filename
            ) : (
              <Link href={props.canonicalPath} className="link text-white">
                {filename}
              </Link>
            )}
          </span>
        </div>
        <div>
          {props.sourceURL && (
            <Link href={props.sourceURL} className="link ml-4 text-white">
              Source
            </Link>
          )}
          {props.repositoryURL && (
            <Link href={props.repositoryURL} className="link ml-4 text-white">
              Repository
            </Link>
          )}
        </div>
      </div>
      {(() => {
        switch (filetype) {
          case "javascript":
          case "typescript":
          case "tsx":
          case "jsx":
          case "json":
          case "yaml":
          case "rust":
          case "toml":
          case "python":
          case "wasm":
          case "makefile":
          case "dockerfile":
          case "csharp":
          case "cpp":
          case "php":
          case "powershell":
          case "css":
          case "c":
            return (
              <RawCodeBlock
                code={props.raw!}
                language={filetype}
                enableLineRef={true}
                className="p-2 sm:px-3 md:px-4"
              />
            );
          case "html":
            return (
              <RawCodeBlock
                code={props.raw!}
                language="markdown"
                enableLineRef={true}
                className="p-2 sm:px-3 md:px-4"
              />
            );
          case "markdown":
            return (
              <div className="px-4">
                <Markdown
                  source={props.raw!}
                  displayURL={"https://genemator.uz" + props.canonicalPath}
                  sourceURL={props.sourceURL}
                  baseURL={"https://genemator.uz" + props.baseURL}
                />
              </div>
            );
          case "image":
            return (
              <Image
                className="w-full"
                src={props.sourceURL}
                alt={props.sourceURL}
              />
            );
          default:
            return (
              <RawCodeBlock
                code={props.raw!}
                language="text"
                enableLineRef={true}
                className="p-2 sm:px-3 md:px-4"
              />
            );
        }
      })()}
    </div>
  );
}

export default FileDisplay;
