/*globals $, define, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./page.tmpl.html',
    'link!./page.css'
],
    function(tmpl){
        var Region


        Region = Backbone.View.extend({
            className: 'regionPage',
            initialize: function() {
                if ( !(this.options.view instanceof Backbone.View) ) {
                    throw new Error('Regions need to be initialized with a .view property that is an instance of Backbone.View')
                }
                // Backbone.Model.prototype.set.call(this, attributes, options);
                this.render()
            },
            render: function() {
                this.$el.html( Mustache.render( tmpl, this.options.view ) )
                document.title = this.options.view.title
                this.$el.append( this.options.view.el ) // Put the child view in the dom
            }
        })
        return Region
    }
)


