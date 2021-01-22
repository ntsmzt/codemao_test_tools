'use strict';
 
goog.require('Blockly.Blocks');
goog.require('Blockly');
 
Blockly.Blocks['walk_left']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/left.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(345);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


Blockly.Blocks['walk_right']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/right.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(345);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_up']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/up.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(345);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_down']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/down.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(345);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_jump']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/jump.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(345);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['walk_repeat']={
	init:function(){
		this.appendDummyInput().appendField(new Blockly.FieldImage("img/block/repeat.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(220);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};