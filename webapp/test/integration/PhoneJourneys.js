/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/cs/test/test6/test/integration/NavigationJourneyPhone",
		"com/cs/test/test6/test/integration/NotFoundJourneyPhone",
		"com/cs/test/test6/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});