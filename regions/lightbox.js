/*globals $, _, define, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./lightbox.tmpl.html',
    'link!./lightbox.css'
],
    function(tmpl){
        var Region


        Region = Backbone.View.extend({
            className: 'regionLightbox',
            events: {
                'click .mask':'maskClicked',
                'click button':'maskClicked'
            },
            initialize: function() {
                if ( !(this.options.view instanceof Backbone.View) ) {
                    throw new Error('Regions need to be initialized with a .view property that is an instance of Backbone.View')
                }
                _.bindAll(this)
                // Backbone.Model.prototype.set.call(this, attributes, options);
                this.render()

                this.options.view.on('close', this.viewClosed)
            },
            render: function() {
                this.$el.html( Mustache.render( tmpl, this.options.view ) )
                this.$content = this.$('.content')
                this.$content.html( this.options.view.el ) // Put the child view in the dom
            },
                maskClicked: function() {
                this.remove()
            },
            viewClosed: function() {
                this.remove()
            }
        })
        return Region
    }
)


