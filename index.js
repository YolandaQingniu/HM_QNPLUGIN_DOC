var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
      branch: "main",
      repo: "https://github.com/YolandaQingniu/HM_QNPLUGIN_DOC.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);
