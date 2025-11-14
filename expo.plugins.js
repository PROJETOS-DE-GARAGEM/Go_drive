const { withMainActivity } = require("@expo/config-plugins");

module.exports = (config) => {
  return withMainActivity(config, (config) => {
    if (!config.modResults.contents.includes('android:exported="true"')) {
      config.modResults.contents = config.modResults.contents.replace(
        /<activity\s/,
        '<activity android:exported="true" '
      );
    }
    return config;
  });
};
