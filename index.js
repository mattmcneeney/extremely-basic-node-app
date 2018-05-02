require('express')().listen(process.env.PORT || 3000, function() {
   console.log('We have liftoff!');
   console.log('Check out my env:');
   console.log(JSON.stringify(require('cfenv').getAppEnv(), null, 2));
});

