'use strict';
 
goog.require('Blockly.Blocks');
goog.require('Blockly');
 
Blockly.Blocks['init_myblock']={
	init:function(){
		this.appendDummyInput().appendField("初始化");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};