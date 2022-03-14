
const ocViewer = require("oc-viewer");
(function () {
  /**
   * instantiate the plugin with the mandatory information
   */
    const viewer = new ocViewer({
      entryPoint: "#oc-viewer",
      contributionId: "your-contribution-id",
      policyId: "your-policy-id",
      authToken:
        "your-valid-auth-token",
    });

    document.querySelector("#update-btn").addEventListener("click", () => {
      /**
       * update information to reload the iframe
       */
      viewer.setConfig({
        contributionId: "your-new-contribution-id",
      policyId: "your-new-policy-id",
      });
    });
  })();