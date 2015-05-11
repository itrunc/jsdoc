define(function(require, exports, module) {
	var View = Backbone.View.extend({
		el: '#menu',
		template: require('apps/materialize/tpl/navbar.handlebars'),
		initialize: function(options) {
			this.menu = {
				color: this.getAnchor('color', 'Color'),
				grid: this.getAnchor('grid', 'Grid'),
				helpers: this.getAnchor('helpers', 'Helpers'),
				media: this.getAnchor('media', 'Media'),
				sass: this.getAnchor('sass', 'Sass'),
				shadow: this.getAnchor('shadow', 'Shadow'),
				table: this.getAnchor('table', 'Table'),
				typography: this.getAnchor('typography', 'Typography'),
				badges: this.getAnchor('badges', 'Badges'),
				buttons: this.getAnchor('buttons', 'Buttons'),
				cards: this.getAnchor('cards', 'Cards'),
				collections: this.getAnchor('collections', 'Collections'),
				footer: this.getAnchor('footer', 'Footer'),
				forms: this.getAnchor('form', 'Form'),
				icons: this.getAnchor('icons', 'Icons'),
				navbar: this.getAnchor('navbar', 'Navbar'),
				pagination: this.getAnchor('pagination', 'Pagination'),
				preloader: this.getAnchor('preloader', 'Preloader'),
				collapsible: this.getAnchor('collapsible', 'Collapsible'),
				dialogs: this.getAnchor('dialogs', 'Dialogs'),
				dropdown: this.getAnchor('dropdown', 'Dropdown'),
				jsmedia: this.getAnchor('jsmedia', 'Media'),
				modals: this.getAnchor('modals', 'Modals'),
				parallax: this.getAnchor('parallax', 'Parallax'),
				pushpin: this.getAnchor('pushpin', 'Pushpin'),
				scrollfire: this.getAnchor('scrollfire', 'Scrollfire'),
				scrollspy: this.getAnchor('scrollspy', 'Scrollspy'),
				sidebar: this.getAnchor('sidebar', 'Sidebar'),
				tabs: this.getAnchor('tabs', 'Tabs'),
				transitions: this.getAnchor('transitions', 'Transitions'),
				waves: this.getAnchor('waves', 'Waves')
			};
			this.$el.html( this.template({
				module: options.module,
				css: {
					label: 'CSS',
					items: [
						this.menu.color,
						this.menu.grid,
						this.menu.helpers,
						this.menu.media,
						this.menu.sass,
						this.menu.shadow,
						this.menu.table,
						this.menu.typography
					]
				},
				components: {
					label: 'Components',
					items: [
						this.menu.badges,
						this.menu.buttons,
						this.menu.cards,
						this.menu.collections,
						this.menu.footer,
						this.menu.forms,
						this.menu.icons,
						this.menu.navbar,
						this.menu.pagination,
						this.menu.preloader
					]
				},
				javascript: {
					label: 'Javascript',
					items: [
						this.menu.collapsible,
						this.menu.dialogs,
						this.menu.dropdown,
						this.menu.jsmedia,
						this.menu.modals,
						this.menu.parallax,
						this.menu.pushpin,
						this.menu.scrollfire,
						this.menu.scrollspy,
						this.menu.sidebar,
						this.menu.tabs,
						this.menu.transitions,
						this.menu.waves
					]
				},
				mobile: {
					label: 'Mobile',
					items: []
				},
				side: [
					this.menu.color,
					this.menu.grid,
					this.menu.helpers,
					this.menu.media,
					this.menu.sass,
					this.menu.shadow,
					this.menu.table,
					this.menu.typography,
					this.menu.badges,
					this.menu.buttons,
					this.menu.cards,
					this.menu.collections,
					this.menu.footer,
					this.menu.forms,
					this.menu.icons,
					this.menu.navbar,
					this.menu.pagination,
					this.menu.preloader,
					this.menu.collapsible,
					this.menu.dialogs,
					this.menu.dropdown,
					this.menu.jsmedia,
					this.menu.modals,
					this.menu.parallax,
					this.menu.pushpin,
					this.menu.scrollfire,
					this.menu.scrollspy,
					this.menu.sidebar,
					this.menu.tabs,
					this.menu.transitions,
					this.menu.waves
				]
			}, {helpers: require('handlebars-helper')}) );
			this.$el.find('.button-collapse').sideNav();
			this.$el.find(".dropdown-button").dropdown();
		},
		events: { },
		render: function() {},
		getAnchor: function(link, label) {
			return { link: '/index.html#materialize/'+link, label: label, module: link }
		}
	});

	module.exports = function(options) {
		return ( new View(options) );
	}
});