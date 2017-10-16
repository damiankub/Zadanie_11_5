$(function(){
	//this code will execute after the DOM is loaded
	function Button(text) {
	this.text = text || 'Hello';
	}

	Button.prototype = {
	create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			$('body').append(this.$element);
			this.$element.click(function() {
		alert(self.text);
	});
	}
}
	var btn1 = new Button('Hello World');
	btn1.create();
});