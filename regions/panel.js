/*globals $, define, _, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./panel.tmpl.html',
    'link!./panel.css'
],
    function(tmpl){
        var Region


        /**
         * Responsibilities:
         * Placement and sizing on the screen
         * Title of region
         * Starting/Stopping of content
         * @type {*}
         */
        Region = Backbone.View.extend({
            tagName: 'section',
            className: 'regionPanel',
            initialize: function() {
                _.bindAll(this)

                if ( !(this.options.view instanceof Backbone.View) ) {
                    throw new Error('Regions need to be initialized with a .view property that is an instance of Backbone.View')
                }
                // Backbone.Model.prototype.set.call(this, attributes, options);
                this.render()

                this.options.view.on('close', this.viewClosed)
            },
            render: function() {
                this.$el.html( Mustache.render(tmpl, this.options.view) )
                this.$content = this.$('.content')
                this.$content.html( this.options.view.el ) // Put the child view in the dom
            },
            viewClosed: function() {
                this.remove()
            }
        })
        return Region
    }
)


