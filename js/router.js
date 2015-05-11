define(function(require, exports, module) {
	var setTitle = function(title) {
		$(document).find('title').text(title);
	};
	module.exports = Backbone.Router.extend({
		routes: {
			'materialize/:module': 'materialize'
		},
		currentApp: null,
		currentContent: null,
		initialize: function() {},
		materialize: function(module) {
			if(this.currentApp) this.currentApp.undelegateEvents();
			if(this.currentContent) this.currentContent.undelegateEvents();
			switch(module) {
				case 'color':
					this.currentContent = require('apps/materialize/view/color')();
					break;
				default: 
					alert('Not Found');
					return;
			}
			this.currentApp = require('apps/materialize/app')({
				module: module,
				content: this.currentContent.render().el
			});
			setTitle('Materialize CSS');
		}
	});
});