define(function(require, exports, module) {
	var View = Backbone.View.extend({
		el: '#main',
		template: require('apps/materialize/tpl/main.html'),
		initialize: function(options) {
			this.$el.html(this.template);
			var navbar = require('apps/materialize/view/navbar')({
				module: options.module
			});
			this.$el.find('#content').html(options.content);
		},
		events: { },
		render: function() {}
	});

	module.exports = function(options) {
		return ( new View(options) );
	}
});