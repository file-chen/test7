/*global QUnit*/

sap.ui.define([
	"com/cs/test/test6/model/GroupSortState",
	"sap/ui/model/json/JSONModel"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("CategoryID").length, 1, "The sorting by CategoryID returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Description").length, 1, "The sorting by Description returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("CategoryID").length, 1, "The group by CategoryID returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to CategoryID if the user groupes by CategoryID", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("CategoryID");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "CategoryID", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Description and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "CategoryID");

		this.oGroupSortState.sort("Description");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});