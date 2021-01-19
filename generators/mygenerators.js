
'use strict';

goog.require('Blockly.JavaScript');
 
Blockly.JavaScript['walk_left']=function(block){
	var code='window.alert("向左走 myblocks...done");\n';
	return code;
};

Blockly.JavaScript['walk_right']=function(block){
	var code='window.alert("向右走 myblocks...done");\n';
	return code;
};

Blockly.JavaScript['walk_up']=function(block){
	var code='window.alert("向上走 myblocks...done");\n';
	return code;
};

Blockly.JavaScript['walk_down']=function(block){
	var code='window.alert("向下走 myblocks...done");\n';
	return code;
};
