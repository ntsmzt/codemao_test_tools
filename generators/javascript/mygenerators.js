
'use strict';

goog.provide('Blockly.JavaScript.walk');
goog.require('Blockly.JavaScript');
 
Blockly.JavaScript['walk_left']=function(block){
	var code='window.alert("向左走 myblocks...done");\n';
	return code;
};