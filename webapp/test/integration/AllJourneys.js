/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Categories in the list
// * All 3 Categories have at least one Products

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/cs/test/test6/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/cs/test/test6/test/integration/pages/App",
	"com/cs/test/test6/test/integration/pages/Browser",
	"com/cs/test/test6/test/integration/pages/Master",
	"com/cs/test/test6/test/integration/pages/Detail",
	"com/cs/test/test6/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.cs.test.test6.view."
	});

	sap.ui.require([
		"com/cs/test/test6/test/integration/MasterJourney",
		"com/cs/test/test6/test/integration/NavigationJourney",
		"com/cs/test/test6/test/integration/NotFoundJourney",
		"com/cs/test/test6/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});