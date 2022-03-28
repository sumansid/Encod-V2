import React from "react";
import {
  withPageAuthRequired,
  getSession,
  getAccessToken,
  withApiAuthRequired,
} from "@auth0/nextjs-auth0";
import { Octokit } from "@octokit/rest";
import CodeEditor from "../components/CodeEditor";
import AutoComplete from "../components/AutoComplete";
import Cookie from "js-cookie";

const chooserepo = (props) => {
  var repositories = props.repos.data;
  let access_token = props.access_token;
  console.log(repositories);

  return (
    <>
      <div className="my-10">
        <div className="bg-gray-100 shadow-md rounded-lg mx-10">
          {/* <CodeEditor />*/}

          <AutoComplete
            access_token={access_token}
            items={repositories}
            itemToString={(item) => {
              if (item) {
                return item.name;
              }
            }}
            onChange={(item) => console.log("item ", item)}
          />
        </div>
      </div>
    </>
  );
};
/*
export default withApiAuthRequired(async function products(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    console.log(accessToken);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});*/

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, params }) {
    let { user } = getSession(req);
    console.log("user from get session ", user);
    let url =
      "https://agile-bastion-79920.herokuapp.com/getaccesstoken/" + user.sub;

    let data = await fetch(url);
    let resData = await data.text();
    resData = resData.replace(/\"/g, "");
    const octokit = new Octokit({
      auth: resData,
    });
    const res = await octokit.request("GET /user/repos");
    Cookie.set("access_token", resData);

    octokit.repos.getContent;

    return {
      props: { repos: res, access_token: resData }, // will be passed to the page component as props
    };
  },
});

export default chooserepo;
