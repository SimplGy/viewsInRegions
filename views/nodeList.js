/*globals $, define, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./nodeList.tmpl.html',
    'link!./nodeList.css'
],
    function(tmpl){
        var View


        View = Backbone.View.extend({
            tagName: 'ul',
            className: 'viewNodeList',
            title: 'List of Nodes',
            events: {
                'click li a': 'clicked'
            },
            initialize: function() {
                this.render()

                // 'Special' properties, that can optionally be picked up by regions
                // this.title = "Node List"
            },
            render: function() {
                this.$el.html(
                    Mustache.render( tmpl )
                )
            },
            clicked: function() {
                this.close()
            },
            close: function() {
                this.trigger('close')
            }
        })
        return View
    }
)


