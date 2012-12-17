/*globals $, define, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./settings.tmpl.html',
    'link!./settings.css'
],
    function(tmpl){
        var View


        View = Backbone.View.extend({
            className: 'viewSettings',
            title: 'Global Settings',
            initialize: function() {
                this.render()
            },
            render: function() {
                this.$el.html(
                    Mustache.render( tmpl )
                )
            }
        })
        return View
    }
)


