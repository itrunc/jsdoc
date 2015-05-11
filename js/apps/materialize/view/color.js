define(function(require, exports, module) {
	var View = Backbone.View.extend({
		tagName: 'div',
		className: 'row',
		template: require('apps/materialize/tpl/color.html'),
		initialize: function(options) { },
		events: { },
		render: function() {
			$(this.el).html( this.template );
			$(this.el).find('#palette .row .col div').each(function(){
				$(this).text($(this).attr('class')).css({
					'height': '55px',
					'line-height': '55px',
					'padding-left': '10px'
				}).closest('.col').css({
					'margin-bottom': '55px'
				});
			});
			return this;
		}
	});

	module.exports = function(options) {
		return ( new View(options) );
	}
});