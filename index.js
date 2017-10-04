require('express')().listen(process.env.PORT || 3000, function() {
   console.log('extremely-basic-node-app running');
   console.log('check out my env:');
   console.log(require('cfenv').getAppEnv());
});
