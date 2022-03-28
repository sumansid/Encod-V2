import { parse } from "cookie";
import React from "react";
import CodeEditor from "../../../components/CodeEditor";
import { Octokit } from "@octokit/rest";
import { encode, decode } from "js-base64";

const repoEditor = ({ repoContent, fileExtension }) => {
  console.log("props.content ", repoContent.data.content);
  const repoDecoded = decode(repoContent.data.content);
  return (
    <>
      <CodeEditor repoData={repoDecoded} fileExtension={fileExtension} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  // get the slug
  const slug = context.query;
  console.log("SLUG ", slug);

  const fileExtension = slug.path.split(".").pop();

  // query the data
  const octokit = new Octokit({
    auth: slug.access_token,
  });

  const content = await octokit.repos.getContent({
    owner: slug.owner,
    repo: slug.repo,
    path: slug.path,
  });
  console.log("content ", content);

  return {
    props: { repoContent: content, fileExtension: fileExtension },
  };
};

export default repoEditor;
