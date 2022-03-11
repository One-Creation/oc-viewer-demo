
const ocViewer = require("oc-viewer");
(function () {
  /**
   * instantiate the plugin with the mandatory information
   */
    const viewer = new ocViewer({
      entryPoint: "#oc-viewer",
      contributionId: "459707bf-d4b4-46bb-8e0e-8eed91b88452",
      policyId: "536ba22b-9742-4e19-a844-04eb7ea5dfd5",
      authToken:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InVHMzliWVpBYXpYRFhnSm90RU1ObiJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJvbmVjcmVhdGlvbi1sZWRnZXIiLCJhcHBsaWNhdGlvbklkIjoib25lY3JlYXRpb24tc2VydmVyIiwiYWN0QXMiOlsiNWNmOGNjYzctMjgwMC00Zjg2LTk0ODAtOTY4MDljNmNjZDA4Il0sInJlYWRBcyI6WyI1Y2Y4Y2NjNy0yODAwLTRmODYtOTQ4MC05NjgwOWM2Y2NkMDgiXSwiYWRtaW4iOmZhbHNlfSwiaHR0cHM6Ly9vbmUtY3JlYXRpb24uY29tLyI6eyJmaXJzdExvZ2luIjpmYWxzZX0sIm5pY2tuYW1lIjoiZmVybmFuZG9wdWJsaXNoZXIzIiwibmFtZSI6ImZlcm5hbmRvcHVibGlzaGVyM0BvbmUtY3JlYXRpb24uY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzIwY2FhNmU3NzlkZjdmNDM4NjE4MDc4YzFmZGFiNjMxP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGZmUucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDMtMTFUMTU6MDc6MzAuNTA4WiIsImVtYWlsIjoiZmVybmFuZG9wdWJsaXNoZXIzQG9uZS1jcmVhdGlvbi5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtOTFncWdlZ3EudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxNjk5NTc3Y2FjMzdmMDA2ODRhNDljMSIsImF1ZCI6IjF4bEl4cm10b3Z0dVV2OWYzcjF5UHZFWUFzZm1ZMWppIiwiaWF0IjoxNjQ3MDE1MTkwLCJleHAiOjE2NDcwNTExOTAsIm5vbmNlIjoiTUZBd1FYWk5abnBpV2tVM1UwSmpOUzVRWjBwRFYycHlkRzFOUXpOM0xuNXlNVEpRTFg1UWFIRnphdz09In0.ZT-PYEf6rnvYyVswIja8wN6fDRnPk9GLj3Z1l6EDgTBY6SNfmO7jTXnXSV2P5rKURItoUWTg_bk3a2xH43i_nYURXLe6Ruaz7pykDHAx07VsYDpLP4vlvqZ07V39FmxdN7T06gnMDaZuKFfikfK01u6_BfQ3aFcLNwE58jC7CiWUrBdrSDT95D9uLvgITSKLMVbV5h9acRH1TRAEnZoZ_fDXp1s3GLtcbrduXvd0WDqhQha-2kbBFQljaCv4LpDJlKkwQ3TmBhj69-sz_WGg4LaEOkSpuRFj-QExsVg6Jx7-MqLbt4VS_j57RcBH41734b6Sh8sJr5YjgWy1s0-F4g",
    });

    document.querySelector("#update-btn").addEventListener("click", () => {
      /**
       * update information to reload the iframe
       */
      viewer.setConfig({
        policyId: "47dfda77-c2c0-4221-96c6-e228b74fac36",
        contributionId: "4949f58e-2efe-4c04-9b11-745e89306623",
      });
    });
  })();