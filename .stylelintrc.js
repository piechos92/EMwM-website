const stylelintConfigDcf = './node_modules/stylelint-config-dcf/index.js';

module.exports = {
  extends: [stylelintConfigDcf],
  rules: {
	// here we can override rules for the project
    "selector-pseudo-class-no-unknown": null,
    "property-no-unknown": null,
    "property-case": null,
  }
}
