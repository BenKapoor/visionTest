var environments = {
  staging: {
    FIREBASE_API_KEY: "AIzaSyD5M6W9dlrT1kVHD-FTZJxt-FE71YnLcik",
    FIREBASE_AUTH_DOMAIN: "vision-16170.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://vision-16170.firebaseio.com",
    FIREBASE_PROJECT_ID: "vision-16170",
    FIREBASE_STORAGE_BUCKET: "vision-16170.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "567159208051",
    GOOGLE_CLOUD_VISION_API_KEY: "AIzaSyCZwd5nY9VprgFLoLWqgWF1APUE-jlermM"
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};
function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return "staging";
  } else if (releaseChannel === "staging") {
    return "staging";
  } else {
    return "staging";
  }
}
function getEnvironment(env) {
  console.log("Release Channel: ", getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;