import React from "react";
import { VscFileCode, VscFolder } from "react-icons/vsc";
import Link from "next/link";

const FileDisplay = ({ path, url, sha, owner, repo_name }) => {
  console.log("url ", url);
  return (
    <Link
      href={{
        pathname: `/repoEditor/${owner}/${repo_name}`,
        query: {
          repo: repo_name,
          path: path,
          owner: owner,
        },
      }}
    >
      <li className="flex">
        <VscFileCode />
        {path}
      </li>
    </Link>
  );
};

const FolderDisplay = ({ path, url, sha, owner, repo_name }) => {
  return (
    <Link href={url}>
      <li className="flex">
        <VscFolder />
        {path}
      </li>
    </Link>
  );
};

const FolderTree = ({ fileTree, owner, repo_name }) => {
  console.log("file tree ", fileTree);
  console.log("owner ", owner);
  console.log("repo_name ", repo_name);
  return (
    <div className="my-3 mx-3 p-5 bg-white rounded-lg justify-between space-x-8 ">
      FolderTree
      <ul className="space-y-3">
        {fileTree.map((item) => {
          return item.type != "tree" ? (
            <FileDisplay
              path={item.path}
              url={item.url}
              sha={item.sha}
              owner={owner}
              repo_name={repo_name}
            />
          ) : (
            <FolderDisplay
              path={item.path}
              url={item.url}
              sha={item.sha}
              owner={owner}
              repo_name={repo_name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FolderTree;
