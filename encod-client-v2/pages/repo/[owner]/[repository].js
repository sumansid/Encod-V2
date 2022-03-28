import React from "react";
import { Octokit } from "@octokit/rest";
import CodeEditor from "../../../components/CodeEditor";
import FolderTree from "../../../components/FolderTree";

const repository = (props) => {
  console.log("props ", props);
  let fileTree = props.fileTree.data.tree;
  console.log("file tree log ", fileTree);
  return (
    <>
      <div className="bg-white py-10 my-3 rounded-lg mx-3 flex:2 justify-center ">
        <p>Repository name : {props.repo_name}</p>
        <p> Repo owner : {props.owner} </p>
      </div>

      <div>
        <FolderTree
          fileTree={fileTree}
          owner={props.owner}
          repo_name={props.repo_name}
        />
      </div>
    </>
  );
};

export default repository;

export const getServerSideProps = async (context) => {
  // get the slug
  const slug = context.query;
  console.log("slug.repo ", slug.repo_name);

  // query the data
  const octokit = new Octokit({
    auth: slug.access_token,
  });

  const fileTree = await octokit.git.getTree({
    owner: slug.owner,
    repo: slug.repo_name,
    tree_sha: "master",
  });

  return {
    props: { repo_name: slug.repo_name, owner: slug.owner, fileTree },
  };
};
