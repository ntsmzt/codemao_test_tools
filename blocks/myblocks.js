'use strict';
 
goog.require('Blockly.Blocks');
goog.require('Blockly');
 
Blockly.Blocks['walk_left']={
	init:function(){
		this.appendDummyInput().appendField("向左走");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};