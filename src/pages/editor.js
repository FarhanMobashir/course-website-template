import React from "react";
import Layout from "@theme/Layout";

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
          margin: "100px",
        }}
      >
        <iframe
          frameborder="0"
          width="100%"
          height="500px"
          src="https://replit.com/@MobashirFarhan/test?lite=true"
        ></iframe>
      </div>
    </Layout>
  );
}

export default Hello;
