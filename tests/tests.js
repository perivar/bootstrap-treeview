/* global $, module, test, equal, ok */

; (function (assert) {

	'use strict';

	function init(options) {
		return $('#treeview').treeview(options);
	}

	function getOptions(el) {
		return el.data().treeview.options;
	}

	var data = [
		{
			text: 'Parent 1',
			nodes: [
				{
					text: 'Child 1',
					nodes: [
						{
							text: 'Grandchild 1'
						},
						{
							text: 'Grandchild 2'
						}
					]
				},
				{
					text: 'Child 2'
				}
			]
		},
		{
			text: 'Parent 2'
		},
		{
			text: 'Parent 3'
		},
		{
			text: 'Parent 4'
		},
		{
			text: 'Parent 5'
		}
	];

	var json = JSON.stringify([
		{
			"text": "Parent 1",
			"nodes": [
				{
					"text": "Child 1",
					"nodes": [
						{
							"text": "Grandchild 1"
						},
						{
							"text": "Grandchild 2"
						}
					]
				},
				{
					"text": "Child 2"
				}
			]
		},
		{
			"text": "Parent 2"
		},
		{
			"text": "Parent 3"
		},
		{
			"text": "Parent 4"
		},
		{
			"text": "Parent 5"
		}
	]);

	QUnit.module('Options');

	QUnit.test('Options setup', function (assert) {
		// First test defaults option values
		var el = init(),
			options = getOptions(el);
		assert.ok(options, 'Defaults created ok');
		assert.equal(options.levels, 2, 'levels default ok');
		assert.equal(options.expandIcon, 'fas fa-plus', 'expandIcon default ok');
		assert.equal(options.collapseIcon, 'fas fa-minus', 'collapseIcon default ok');
		assert.equal(options.emptyIcon, 'fas', 'emptyIcon default ok');
		assert.equal(options.nodeIcon, '', 'nodeIcon default ok');
		assert.equal(options.selectedIcon, '', 'selectedIcon default ok');
		assert.equal(options.checkedIcon, 'far fa-check-square', 'checkedIcon default ok');
		assert.equal(options.uncheckedIcon, 'far fa-square', 'uncheckedIcon default ok');
		assert.equal(options.color, undefined, 'color default ok');
		assert.equal(options.backColor, undefined, 'backColor default ok');
		assert.equal(options.borderColor, undefined, 'borderColor default ok');
		assert.equal(options.onhoverColor, '#F5F5F5', 'onhoverColor default ok');
		assert.equal(options.selectedColor, '#FFFFFF', 'selectedColor default ok');
		assert.equal(options.selectedBackColor, '#428bca', 'selectedBackColor default ok');
		assert.equal(options.searchResultColor, '#D9534F', 'searchResultColor default ok');
		assert.equal(options.searchResultBackColor, undefined, 'searchResultBackColor default ok');
		assert.equal(options.enableLinks, false, 'enableLinks default ok');
		assert.equal(options.highlightSelected, true, 'highlightSelected default ok');
		assert.equal(options.highlightSearchResults, true, 'highlightSearchResults default ok');
		assert.equal(options.showBorder, true, 'showBorder default ok');
		assert.equal(options.showIcon, true, 'showIcon default ok');
		assert.equal(options.showCheckbox, false, 'showCheckbox default ok');
		assert.equal(options.showTags, false, 'showTags default ok');
		assert.equal(options.multiSelect, false, 'multiSelect default ok');
		assert.equal(options.onNodeChecked, null, 'onNodeChecked default ok');
		assert.equal(options.onNodeCollapsed, null, 'onNodeCollapsed default ok');
		assert.equal(options.onNodeDisabled, null, 'onNodeDisabled default ok');
		assert.equal(options.onNodeEnabled, null, 'onNodeEnabled default ok');
		assert.equal(options.onNodeExpanded, null, 'onNodeExpanded default ok');
		assert.equal(options.onNodeSelected, null, 'onNodeSelected default ok');
		assert.equal(options.onNodeUnchecked, null, 'onNodeUnchecked default ok');
		assert.equal(options.onNodeUnselected, null, 'onNodeUnselected default ok');
		assert.equal(options.onSearchComplete, null, 'onSearchComplete default ok');
		assert.equal(options.onSearchCleared, null, 'onSearchCleared default ok');

		// Then test user options are correctly set
		var opts = {
			levels: 99,
			expandIcon: 'fas fa-plus',
			collapseIcon: 'fas fa-minus',
			emptyIcon: 'fas',
			nodeIcon: 'fas fa-stop',
			selectedIcon: 'fas fa-mouse-pointer',
			checkedIcon: 'far fa-check-square',
			uncheckedIcon: 'far fa-square',
			color: 'yellow',
			backColor: 'purple',
			borderColor: 'purple',
			onhoverColor: 'orange',
			selectedColor: 'yellow',
			selectedBackColor: 'darkorange',
			searchResultColor: 'yellow',
			searchResultBackColor: 'darkorange',
			enableLinks: true,
			highlightSelected: false,
			highlightSearchResults: true,
			showBorder: false,
			showIcon: false,
			showCheckbox: true,
			showTags: true,
			multiSelect: true,
			onNodeChecked: function (assert) { },
			onNodeCollapsed: function (assert) { },
			onNodeDisabled: function (assert) { },
			onNodeEnabled: function (assert) { },
			onNodeExpanded: function (assert) { },
			onNodeSelected: function (assert) { },
			onNodeUnchecked: function (assert) { },
			onNodeUnselected: function (assert) { },
			onSearchComplete: function (assert) { },
			onSearchCleared: function (assert) { }
		};

		options = getOptions(init(opts));
		assert.ok(options, 'User options created ok');
		assert.equal(options.levels, 99, 'levels set ok');
		assert.equal(options.expandIcon, 'fas fa-plus', 'expandIcon set ok');
		assert.equal(options.collapseIcon, 'fas fa-minus', 'collapseIcon set ok');
		assert.equal(options.emptyIcon, 'fas', 'emptyIcon set ok');
		assert.equal(options.nodeIcon, 'fas fa-stop', 'nodeIcon set ok');
		assert.equal(options.selectedIcon, 'fas fa-mouse-pointer', 'selectedIcon set ok');
		assert.equal(options.checkedIcon, 'far fa-check-square', 'checkedIcon set ok');
		assert.equal(options.uncheckedIcon, 'far fa-square', 'uncheckedIcon set ok');
		assert.equal(options.color, 'yellow', 'color set ok');
		assert.equal(options.backColor, 'purple', 'backColor set ok');
		assert.equal(options.borderColor, 'purple', 'borderColor set ok');
		assert.equal(options.onhoverColor, 'orange', 'onhoverColor set ok');
		assert.equal(options.selectedColor, 'yellow', 'selectedColor set ok');
		assert.equal(options.selectedBackColor, 'darkorange', 'selectedBackColor set ok');
		assert.equal(options.searchResultColor, 'yellow', 'searchResultColor set ok');
		assert.equal(options.searchResultBackColor, 'darkorange', 'searchResultBackColor set ok');
		assert.equal(options.enableLinks, true, 'enableLinks set ok');
		assert.equal(options.highlightSelected, false, 'highlightSelected set ok');
		assert.equal(options.highlightSearchResults, true, 'highlightSearchResults set ok');
		assert.equal(options.showBorder, false, 'showBorder set ok');
		assert.equal(options.showIcon, false, 'showIcon set ok');
		assert.equal(options.showCheckbox, true, 'showCheckbox set ok');
		assert.equal(options.showTags, true, 'showTags set ok');
		assert.equal(options.multiSelect, true, 'multiSelect set ok');
		assert.equal(typeof options.onNodeChecked, 'function', 'onNodeChecked set ok');
		assert.equal(typeof options.onNodeCollapsed, 'function', 'onNodeCollapsed set ok');
		assert.equal(typeof options.onNodeDisabled, 'function', 'onNodeDisabled set ok');
		assert.equal(typeof options.onNodeEnabled, 'function', 'onNodeEnabled set ok');
		assert.equal(typeof options.onNodeExpanded, 'function', 'onNodeExpanded set ok');
		assert.equal(typeof options.onNodeSelected, 'function', 'onNodeSelected set ok');
		assert.equal(typeof options.onNodeUnchecked, 'function', 'onNodeUnchecked set ok');
		assert.equal(typeof options.onNodeUnselected, 'function', 'onNodeUnselected set ok');
		assert.equal(typeof options.onSearchComplete, 'function', 'onSearchComplete set ok');
		assert.equal(typeof options.onSearchCleared, 'function', 'onSearchCleared set ok');
	});

	QUnit.test('Links enabled', function (assert) {
		init({ enableLinks: true, data: data });
		assert.ok($('.list-group-item:first').children('a').length, 'Links are enabled');
	});


	QUnit.module('Data');

	QUnit.test('Accepts JSON', function (assert) {
		var el = init({ levels: 1, data: json });
		assert.equal(el.find("ul li").length, 5, 'Correct number of root nodes');
	});

	QUnit.module('Behaviour');

	QUnit.test('Is chainable', function (assert) {
		var el = init();
		assert.equal(el.addClass('test').attr('class'), 'treeview test', 'Is chainable');
	});

	QUnit.test('Correct initial levels shown', function (assert) {

		var el = init({ levels: 1, data: data });
		assert.equal(el.find("ul li").length, 5, 'Correctly display 5 root nodes when levels set to 1');

		el = init({ levels: 2, data: data });
		assert.equal(el.find("ul li").length, 7, 'Correctly display 5 root and 2 child nodes when levels set to 2');

		el = init({ levels: 3, data: data });
		assert.equal(el.find("ul li").length, 9, 'Correctly display 5 root, 2 children and 2 grand children nodes when levels set to 3');
	});

	QUnit.test('Expanding a node', function (assert) {

		var cbWorked, onWorked = false;
		init({
			data: data,
			levels: 1,
			onNodeExpanded: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeExpanded', function (/*event, date*/) {
				onWorked = true;
			});

		var nodeCount = $('.list-group-item').length;
		var el = $('.expand-icon:first');
		el.trigger('click');
		assert.ok(($('.list-group-item').length > nodeCount), 'Number of nodes are increased, so node must have expanded');
		assert.ok(cbWorked, 'onNodeExpanded function was called');
		assert.ok(onWorked, 'nodeExpanded was fired');
	});

	QUnit.test('Collapsing a node', function (assert) {

		var cbWorked, onWorked = false;
		init({
			data: data,
			levels: 2,
			onNodeCollapsed: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeCollapsed', function (/*event, date*/) {
				onWorked = true;
			});

		var nodeCount = $('.list-group-item').length;
		var el = $('.expand-icon:first');
		el.trigger('click');
		assert.ok(($('.list-group-item').length < nodeCount), 'Number of nodes has decreased, so node must have collapsed');
		assert.ok(cbWorked, 'onNodeCollapsed function was called');
		assert.ok(onWorked, 'nodeCollapsed was fired');
	});

	QUnit.test('Selecting a node', function (assert) {

		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			onNodeSelected: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeSelected', function (/*event, date*/) {
				onWorked = true;
			});
		var options = getOptions($tree);

		// Simulate click
		$('.list-group-item:first').trigger('click');

		// Has class node-selected
		assert.ok($('.list-group-item:first').hasClass('node-selected'), 'Node is correctly selected : class "node-selected" added');

		// Only one can be selected
		assert.ok(($('.node-selected').length === 1), 'There is only one selected node');

		// Has correct icon
		var iconClass = options.selectedIcon || options.nodeIcon;
		assert.ok(!iconClass || $('.expand-icon:first').hasClass(iconClass), 'Node icon is correct');

		// Events triggered
		assert.ok(cbWorked, 'onNodeSelected function was called');
		assert.ok(onWorked, 'nodeSelected was fired');
	});

	QUnit.test('Unselecting a node', function (assert) {

		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			onNodeUnselected: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeUnselected', function (/*event, date*/) {
				onWorked = true;
			});
		var options = getOptions($tree);

		// First select a node
		$('.list-group-item:first').trigger('click');
		cbWorked = onWorked = false;

		// Simulate click
		$('.list-group-item:first').trigger('click');

		// Has class node-selected
		assert.ok(!$('.list-group-item:first').hasClass('node-selected'), 'Node is correctly unselected : class "node-selected" removed');

		// Only one can be selected
		assert.ok(($('.node-selected').length === 0), 'There are no selected nodes');

		// Has correct icon
		assert.ok(!options.nodeIcon || $('.expand-icon:first').hasClass(options.nodeIcon), 'Node icon is correct');

		// Events triggered
		assert.ok(cbWorked, 'onNodeUnselected function was called');
		assert.ok(onWorked, 'nodeUnselected was fired');
	});

	QUnit.test('Selecting multiple nodes (multiSelect true)', function (assert) {

		init({
			data: data,
			multiSelect: true
		});

		var $firstEl = $('.list-group-item:nth-child(1)').trigger('click');
		var $secondEl = $('.list-group-item:nth-child(2)').trigger('click');

		$firstEl = $('.list-group-item:nth-child(1)');
		$secondEl = $('.list-group-item:nth-child(2)');

		assert.ok($firstEl.hasClass('node-selected'), 'First node is correctly selected : class "node-selected" added');
		assert.ok($secondEl.hasClass('node-selected'), 'Second node is correctly selected : class "node-selected" added');
		assert.ok(($('.node-selected').length === 2), 'There are two selected nodes');
	});

	QUnit.test('Clicking a non-selectable, collapsed node expands the node', function (assert) {
		var testData = $.extend(true, {}, data);
		testData[0].selectable = false;

		var cbCalled = false;
		var onCalled = false;
		init({
			levels: 1,
			data: testData,
			onNodeSelected: function (/*event, date*/) {
				cbCalled = true;
			}
		})
			.on('nodeSelected', function (/*event, date*/) {
				onCalled = true;
			});

		var nodeCount = $('.list-group-item').length;
		var el = $('.list-group-item:first');
		el.trigger('click');
		el = $('.list-group-item:first');
		assert.ok(!el.hasClass('node-selected'), 'Node should not be selected');
		assert.ok(!cbCalled, 'onNodeSelected function should not be called');
		assert.ok(!onCalled, 'nodeSelected should not fire');
		assert.ok(($('.list-group-item').length > nodeCount), 'Number of nodes are increased, so node must have expanded');
	});

	QUnit.test('Clicking a non-selectable, expanded node collapses the node', function (assert) {
		var testData = $.extend(true, {}, data);
		testData[0].selectable = false;

		var cbCalled = false;
		var onCalled = false;
		init({
			levels: 2,
			data: testData,
			onNodeSelected: function (/*event, date*/) {
				cbCalled = true;
			}
		})
			.on('nodeSelected', function (/*event, date*/) {
				onCalled = true;
			});

		var nodeCount = $('.list-group-item').length;
		var el = $('.list-group-item:first');
		el.trigger('click');
		el = $('.list-group-item:first');

		assert.ok(!el.hasClass('node-selected'), 'Node should not be selected');
		assert.ok(!cbCalled, 'onNodeSelected function should not be called');
		assert.ok(!onCalled, 'nodeSelected should not fire');
		assert.ok(($('.list-group-item').length < nodeCount), 'Number of nodes has decreased, so node must have collapsed');
	});

	QUnit.test('Checking a node', function (assert) {

		// setup test
		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			showCheckbox: true,
			onNodeChecked: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeChecked', function (/*event, date*/) {
				onWorked = true;
			});
		var options = getOptions($tree);

		// simulate click event on check icon
		var $el = $('.check-icon:first');
		$el.trigger('click');

		// check state is correct
		$el = $('.check-icon:first');
		assert.ok(($el.attr('class').indexOf(options.checkedIcon) !== -1), 'Node is checked : icon is correct');
		assert.ok(cbWorked, 'onNodeChecked function was called');
		assert.ok(onWorked, 'nodeChecked was fired');
	});

	QUnit.test('Unchecking a node', function (assert) {

		// setup test
		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			showCheckbox: true,
			onNodeUnchecked: function (/*event, date*/) {
				cbWorked = true;
			}
		})
			.on('nodeUnchecked', function (/*event, date*/) {
				onWorked = true;
			});
		var options = getOptions($tree);

		// first check a node
		var $el = $('.check-icon:first');
		$el.trigger('click');

		// then simulate unchecking a node
		cbWorked = onWorked = false;
		$el = $('.check-icon:first');
		$el.trigger('click');

		// check state is correct
		$el = $('.check-icon:first');
		assert.ok(($el.attr('class').indexOf(options.uncheckedIcon) !== -1), 'Node is unchecked : icon is correct');
		assert.ok(cbWorked, 'onNodeUnchecked function was called');
		assert.ok(onWorked, 'nodeUnchecked was fired');
	});


	QUnit.module('Methods');

	QUnit.test('getNode', function (assert) {
		var $tree = init({ data: data });
		var nodeParent1 = $tree.treeview('getNode', 0);
		assert.equal(nodeParent1.text, 'Parent 1', 'Correct node returned : requested "Parent 1", got "Parent 1"');
	});

	QUnit.test('getParent', function (assert) {
		var $tree = init({ data: data });
		var nodeChild1 = $tree.treeview('getNode', 1);
		var parentNode = $tree.treeview('getParent', nodeChild1);
		assert.equal(parentNode.text, 'Parent 1', 'Correct node returned : requested parent of "Child 1", got "Parent 1"');
	});

	QUnit.test('getSiblings', function (assert) {
		var $tree = init({ data: data });

		// Test root level, internally uses the this.tree
		var nodeParent1 = $tree.treeview('getNode', 0);
		var nodeParent1Siblings = $tree.treeview('getSiblings', nodeParent1);
		var isArray = (nodeParent1Siblings instanceof Array);
		var countOK = nodeParent1Siblings.length === 4;
		var resultsOK = nodeParent1Siblings[0].text === 'Parent 2';
		resultsOK = resultsOK && nodeParent1Siblings[1].text === 'Parent 3';
		resultsOK = resultsOK && nodeParent1Siblings[2].text === 'Parent 4';
		resultsOK = resultsOK && nodeParent1Siblings[3].text === 'Parent 5';
		assert.ok(isArray, 'Correct siblings for "Parent 1" [root] : is array');
		assert.ok(countOK, 'Correct siblings for "Parent 1" [root] : count OK');
		assert.ok(resultsOK, 'Correct siblings for "Parent 1" [root] : results OK');

		// Test non root level, internally uses getParent.nodes
		var nodeChild1 = $tree.treeview('getNode', 1);
		var nodeChild1Siblings = $tree.treeview('getSiblings', nodeChild1);
		var isArray = (nodeChild1Siblings instanceof Array);
		var countOK = nodeChild1Siblings.length === 1;
		var results = nodeChild1Siblings[0].text === 'Child 2'
		assert.ok(isArray, 'Correct siblings for "Child 1" [non root] : is array');
		assert.ok(countOK, 'Correct siblings for "Child 1" [non root] : count OK');
		assert.ok(results, 'Correct siblings for "Child 1" [non root] : results OK');
	});

	QUnit.test('getSelected', function (assert) {
		var $tree = init({ data: data })
			.treeview('selectNode', 0);

		var selectedNodes = $tree.treeview('getSelected');
		assert.ok((selectedNodes instanceof Array), 'Result is an array');
		assert.equal(selectedNodes.length, 1, 'Correct number of nodes returned');
		assert.equal(selectedNodes[0].text, 'Parent 1', 'Correct node returned');
	});

	QUnit.test('getUnselected', function (assert) {
		var $tree = init({ data: data })
			.treeview('selectNode', 0);

		var unselectedNodes = $tree.treeview('getUnselected');
		assert.ok((unselectedNodes instanceof Array), 'Result is an array');
		assert.equal(unselectedNodes.length, 8, 'Correct number of nodes returned');
	});

	// Assumptions:
	// Default tree + expanded to 2 levels,
	// means 1 node 'Parent 1' should be expanded and therefore returned
	QUnit.test('getExpanded', function (assert) {
		var $tree = init({ data: data });
		var expandedNodes = $tree.treeview('getExpanded');
		assert.ok((expandedNodes instanceof Array), 'Result is an array');
		assert.equal(expandedNodes.length, 1, 'Correct number of nodes returned');
		assert.equal(expandedNodes[0].text, 'Parent 1', 'Correct node returned');
	});

	// Assumptions:
	// Default tree + expanded to 2 levels, means only 'Parent 1' should be expanded
	// as all other parent nodes have no children their state will be collapsed
	// which means 8 of the 9 nodes should be returned
	QUnit.test('getCollapsed', function (assert) {
		var $tree = init({ data: data });
		var collapsedNodes = $tree.treeview('getCollapsed');
		assert.ok((collapsedNodes instanceof Array), 'Result is an array');
		assert.equal(collapsedNodes.length, 8, 'Correct number of nodes returned');
	});

	QUnit.test('getChecked', function (assert) {
		var $tree = init({ data: data, showCheckbox: true })
			.treeview('checkNode', 0);

		var checkedNodes = $tree.treeview('getChecked');
		assert.ok((checkedNodes instanceof Array), 'Result is an array');
		assert.equal(checkedNodes.length, 1, 'Correct number of nodes returned');
		assert.equal(checkedNodes[0].text, 'Parent 1', 'Correct node returned');
	});

	QUnit.test('getUnchecked', function (assert) {
		var $tree = init({ data: data })
			.treeview('checkNode', 0);

		var uncheckedNodes = $tree.treeview('getUnchecked');
		assert.ok((uncheckedNodes instanceof Array), 'Result is an array');
		assert.equal(uncheckedNodes.length, 8, 'Correct number of nodes returned');
	});

	QUnit.test('getDisabled', function (assert) {
		var $tree = init({ data: data })
			.treeview('disableNode', 0);

		var disabledNodes = $tree.treeview('getDisabled');
		assert.ok((disabledNodes instanceof Array), 'Result is an array');
		assert.equal(disabledNodes.length, 1, 'Correct number of nodes returned');
		assert.equal(disabledNodes[0].text, 'Parent 1', 'Correct node returned');
	});

	QUnit.test('getEnabled', function (assert) {
		var $tree = init({ data: data })
			.treeview('disableNode', 0);

		var enabledNodes = $tree.treeview('getEnabled');
		assert.ok((enabledNodes instanceof Array), 'Result is an array');
		assert.equal(enabledNodes.length, 8, 'Correct number of nodes returned');
	});

	QUnit.test('disableAll / enableAll', function (assert) {
		var $tree = init({ data: data, levels: 1 });

		$tree.treeview('disableAll');
		assert.equal($tree.find('ul li.node-disabled').length, 5, 'Disable all works, 9 nodes with node-disabled class');

		$tree.treeview('enableAll');
		assert.equal($tree.find('ul li.node-disabled').length, 0, 'Check all works, 9 nodes non with node-disabled class');
	});

	QUnit.test('disableNode / enableNode', function (assert) {
		var $tree = init({ data: data, levels: 1 });
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Disable node using node id
		$tree.treeview('disableNode', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-disabled'), 'Disable node (by id) : Node has class node-disabled');
		assert.ok(($('.node-disabled').length === 1), 'Disable node (by id) : There is only one disabled node');

		// Enable node using node id
		$tree.treeview('enableNode', nodeId);
		assert.ok(!$('.list-group-item:first').hasClass('node-disabled'), 'Enable node (by id) : Node does not have class node-disabled');
		assert.ok(($('.node-checked').length === 0), 'Enable node (by id) : There are no disabled nodes');

		// Disable node using node
		$tree.treeview('disableNode', node);
		assert.ok($('.list-group-item:first').hasClass('node-disabled'), 'Disable node (by node) : Node has class node-disabled');
		assert.ok(($('.node-disabled').length === 1), 'Disable node (by node) : There is only one disabled node');

		// Enable node using node
		$tree.treeview('enableNode', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-disabled'), 'Enable node (by node) : Node does not have class node-disabled');
		assert.ok(($('.node-checked').length === 0), 'Enable node (by node) : There are no disabled nodes');
	});

	QUnit.test('toggleNodeDisabled', function (assert) {
		var $tree = init({ data: data, levels: 1 });
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Toggle disabled using node id
		$tree.treeview('toggleNodeDisabled', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-disabled'), 'Toggle node (by id) : Node has class node-disabled');
		assert.ok(($('.node-disabled').length === 1), 'Toggle node (by id) : There is only one disabled node');

		// Toggle disabled using node
		$tree.treeview('toggleNodeDisabled', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-disabled'), 'Toggle node (by node) : Node does not have class node-disabled');
		assert.ok(($('.node-disabled').length === 0), 'Toggle node (by node) : There are no disabled nodes');
	});

	QUnit.test('checkAll / uncheckAll', function (assert) {
		var $tree = init({ data: data, levels: 3, showCheckbox: true });

		$tree.treeview('checkAll');
		assert.equal($tree.find('ul li.node-checked').length, 9, 'Check all works, 9 nodes with node-checked class');
		assert.equal($tree.find('ul li .fa-check-square').length, 9, 'Check all works, 9 nodes with fa-check-square icon');

		$tree.treeview('uncheckAll');
		assert.equal($tree.find('ul li.node-checked').length, 0, 'Check all works, 9 nodes non with node-checked class');
		assert.equal($tree.find('ul li .fa-square').length, 9, 'Check all works, 9 nodes with fa-square icon');
	});

	QUnit.test('checkNode / uncheckNode', function (assert) {
		var $tree = init({ data: data, showCheckbox: true });
		var options = getOptions($tree);
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Check node using node id
		$tree.treeview('checkNode', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-checked'), 'Check node (by id) : Node has class node-checked');
		assert.ok(($('.node-checked').length === 1), 'Check node (by id) : There is only one checked node');
		assert.ok($('.check-icon:first').hasClass(options.checkedIcon), 'Check node (by id) : Node icon is correct');

		// Uncheck node using node id
		$tree.treeview('uncheckNode', nodeId);
		assert.ok(!$('.list-group-item:first').hasClass('node-checked'), 'Uncheck node (by id) : Node does not have class node-checked');
		assert.ok(($('.node-checked').length === 0), 'Uncheck node (by id) : There are no checked nodes');
		assert.ok($('.check-icon:first').hasClass(options.uncheckedIcon), 'Uncheck node (by id) : Node icon is correct');

		// Check node using node
		$tree.treeview('checkNode', node);
		assert.ok($('.list-group-item:first').hasClass('node-checked'), 'Check node (by node) : Node has class node-checked');
		assert.ok(($('.node-checked').length === 1), 'Check node (by node) : There is only one checked node');
		assert.ok($('.check-icon:first').hasClass(options.checkedIcon), 'Check node (by node) : Node icon is correct');

		// Uncheck node using node
		$tree.treeview('uncheckNode', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-checked'), 'Uncheck node (by node) : Node does not have class node-checked');
		assert.ok(($('.node-checked').length === 0), 'Uncheck node (by node) : There are no checked nodes');
		assert.ok($('.check-icon:first').hasClass(options.uncheckedIcon), 'Uncheck node (by node) : Node icon is correct');
	});

	QUnit.test('toggleNodeChecked', function (assert) {
		var $tree = init({ data: data, showCheckbox: true });
		var options = getOptions($tree);
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Toggle checked using node id
		$tree.treeview('toggleNodeChecked', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-checked'), 'Toggle node (by id) : Node has class node-checked');
		assert.ok(($('.node-checked').length === 1), 'Toggle node (by id) : There is only one checked node');
		assert.ok($('.check-icon:first').hasClass(options.checkedIcon), 'Toggle node (by id) : Node icon is correct');

		// Toggle checked using node
		$tree.treeview('toggleNodeChecked', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-checked'), 'Toggle node (by node) : Node does not have class node-checked');
		assert.ok(($('.node-checked').length === 0), 'Toggle node (by node) : There are no checked nodes');
		assert.ok($('.check-icon:first').hasClass(options.uncheckedIcon), 'Toggle node (by node) : Node icon is correct');
	});

	QUnit.test('selectNode / unselectNode', function (assert) {
		var $tree = init({ data: data, selectedIcon: 'glyphicon glyphicon-selected' });
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Select node using node id
		$tree.treeview('selectNode', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-selected'), 'Select node (by id) : Node has class node-selected');
		assert.ok(($('.node-selected').length === 1), 'Select node (by id) : There is only one selected node');

		// Unselect node using node id
		$tree.treeview('unselectNode', nodeId);
		assert.ok(!$('.list-group-item:first').hasClass('node-selected'), 'Unselect node (by id) : Node does not have class node-selected');
		assert.ok(($('.node-selected').length === 0), 'Unselect node (by id) : There are no selected nodes');

		// Select node using node
		$tree.treeview('selectNode', node);
		assert.ok($('.list-group-item:first').hasClass('node-selected'), 'Select node (by node) : Node has class node-selected');
		assert.ok(($('.node-selected').length === 1), 'Select node (by node) : There is only one selected node');

		// Unselect node using node id
		$tree.treeview('unselectNode', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-selected'), 'Unselect node (by node) : Node does not have class node-selected');
		assert.ok(($('.node-selected').length === 0), 'Unselect node (by node) : There are no selected nodes');
	});

	QUnit.test('toggleNodeSelected', function (assert) {
		var $tree = init({ data: data });
		var nodeId = 0;
		var node = $tree.treeview('getNode', 0);

		// Toggle selected using node id
		$tree.treeview('toggleNodeSelected', nodeId);
		assert.ok($('.list-group-item:first').hasClass('node-selected'), 'Toggle node (by id) : Node has class node-selected');
		assert.ok(($('.node-selected').length === 1), 'Toggle node (by id) : There is only one selected node');

		// Toggle selected using node
		$tree.treeview('toggleNodeSelected', node);
		assert.ok(!$('.list-group-item:first').hasClass('node-selected'), 'Toggle node (by id) : Node does not have class node-selected');
		assert.ok(($('.node-selected').length === 0), 'Toggle node (by node) : There are no selected nodes');
	});

	QUnit.test('expandAll / collapseAll', function (assert) {
		var $tree = init({ data: data, levels: 1 });
		assert.equal($tree.find('ul li').length, 5, 'Starts in collapsed state, 5 root nodes displayed');

		$tree.treeview('expandAll');
		assert.equal($tree.find('ul li').length, 9, 'Expand all works, all 9 nodes displayed');

		$tree.treeview('collapseAll');
		assert.equal($tree.find('ul li').length, 5, 'Collapse all works, 5 original root nodes displayed');

		$tree.treeview('expandAll', { levels: 1 });
		assert.equal($tree.find('ul li').length, 7, 'Expand all (levels = 1) works, correctly displayed 7 nodes');
	});

	QUnit.test('expandNode / collapseNode / toggleExpanded', function (assert) {
		var $tree = init({ data: data, levels: 1 });
		assert.equal($tree.find('ul li').length, 5, 'Starts in collapsed state, 5 root nodes displayed');

		$tree.treeview('expandNode', 0);
		assert.equal($tree.find('ul li').length, 7, 'Expand node (by id) works, 7 nodes displayed');

		$tree.treeview('collapseNode', 0);
		assert.equal($tree.find('ul li').length, 5, 'Collapse node (by id) works, 5 original nodes displayed');

		$tree.treeview('toggleNodeExpanded', 0);
		assert.equal($tree.find('ul li').length, 7, 'Toggle node (by id) works, 7 nodes displayed');

		$tree.treeview('toggleNodeExpanded', 0);
		assert.equal($tree.find('ul li').length, 5, 'Toggle node (by id) works, 5 original nodes displayed');

		$tree.treeview('expandNode', [0, { levels: 2 }]);
		assert.equal($tree.find('ul li').length, 9, 'Expand node (levels = 2, by id) works, 9 nodes displayed');

		$tree = init({ data: data, levels: 1 });
		assert.equal($tree.find('ul li').length, 5, 'Reset to collapsed state, 5 root nodes displayed');

		var nodeParent1 = $tree.treeview('getNode', 0);
		$tree.treeview('expandNode', nodeParent1);
		assert.equal($tree.find('ul li').length, 7, 'Expand node (by node) works, 7 nodes displayed');

		$tree.treeview('collapseNode', nodeParent1);
		assert.equal($tree.find('ul li').length, 5, 'Collapse node (by node) works, 5 original nodes displayed');

		$tree.treeview('toggleNodeExpanded', nodeParent1);
		assert.equal($tree.find('ul li').length, 7, 'Toggle node (by node) works, 7 nodes displayed');

		$tree.treeview('toggleNodeExpanded', nodeParent1);
		assert.equal($tree.find('ul li').length, 5, 'Toggle node (by node) works, 5 original nodes displayed');

		$tree.treeview('expandNode', [nodeParent1, { levels: 2 }]);
		assert.equal($tree.find('ul li').length, 9, 'Expand node (levels = 2, by node) works, 9 nodes displayed');
	});

	QUnit.test('revealNode', function (assert) {
		var $tree = init({ data: data, levels: 1 });

		$tree.treeview('revealNode', 1); // Child_1
		assert.equal($tree.find('ul li').length, 7, 'Reveal node (by id) works, reveal Child 1 and 7 nodes displayed');

		var nodeGrandchild1 = $tree.treeview('getNode', 2); // Grandchild 1
		$tree.treeview('revealNode', nodeGrandchild1);
		assert.equal($tree.find('ul li').length, 9, 'Reveal node (by node) works, reveal Grandchild 1 and 9 nodes displayed');
	});

	QUnit.test('search', function (assert) {
		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			onSearchComplete: function (/*event, results*/) {
				cbWorked = true;
			}
		})
			.on('searchComplete', function (/*event, results*/) {
				onWorked = true;
			});

		// Case sensitive, exact match
		var result = $tree.treeview('search', ['Parent 1', { ignoreCase: false, exactMatch: true }]);
		assert.equal(result.length, 1, 'Search "Parent 1" case sensitive, exact match - returns 1 result');

		// Case sensitive, like
		result = $tree.treeview('search', ['Parent', { ignoreCase: false, exactMatch: false }]);
		assert.equal(result.length, 5, 'Search "Parent" case sensitive, exact match - returns 5 results');

		// Case insensitive, exact match
		result = $tree.treeview('search', ['parent 1', { ignoreCase: true, exactMatch: true }]);
		assert.equal(result.length, 1, 'Search "parent 1" case insensitive, exact match - returns 1 result');

		// Case insensitive, like
		result = $tree.treeview('search', ['parent', { ignoreCase: true, exactMatch: false }]);
		assert.equal(result.length, 5, 'Search "parent" case insensitive, exact match - returns 5 results')

		// Check events fire
		assert.ok(cbWorked, 'onSearchComplete function was called');
		assert.ok(onWorked, 'searchComplete was fired');
	});

	QUnit.test('clearSearch', function (assert) {
		var cbWorked, onWorked = false;
		var $tree = init({
			data: data,
			onSearchCleared: function (/*event, results*/) {
				cbWorked = true;
			}
		})
			.on('searchCleared', function (/*event, results*/) {
				onWorked = true;
			});

		// Check results are cleared
		$tree.treeview('search', ['Parent 1', { ignoreCase: false, exactMatch: true }]);
		assert.equal($tree.find('.search-result').length, 1, 'Search results highlighted');
		$tree.treeview('clearSearch');
		assert.equal($tree.find('.search-result').length, 0, 'Search results cleared');

		// Check events fire
		assert.ok(cbWorked, 'onSearchCleared function was called');
		assert.ok(onWorked, 'searchCleared was fired');
	});

}());
