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

Blockly.Blocks['walk_right']={
	init:function(){
		this.appendDummyInput().appendField("向右走");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_up']={
	init:function(){
		this.appendDummyInput().appendField("向上走");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_down']={
	init:function(){
		this.appendDummyInput().appendField("向下走");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};