/*globals $, define, Backbone, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!./overview.tmpl.html',
    'regions/panel',
    'views/nodeList',
    'views/settings',
    'regions/lightbox'
],
    function(tmpl, RegionPanel, ViewNodeList, ViewSettings, RegionLightbox){
        var View


        View = Backbone.View.extend({
            className: 'viewOverview',
            title: 'Overview',
            events: {
                'click #LaunchLightbox': 'launchLightbox'
            },
            initialize: function() {
                this.render()
            },
            render: function() {
                this.$el.html( Mustache.render( tmpl ) )

                //Create panels
                this.panelA = new RegionPanel({ 'view': new ViewSettings() })
                this.panelB = new RegionPanel({ 'view': new ViewNodeList() })
                //Put panels in the dom
                this.$el.append( this.panelA.el )
                this.$el.append( this.panelB.el )
            },
            launchLightbox : function() {
                this.lightbox = new RegionLightbox({ 'view': new ViewNodeList() })
                this.$el.append( this.lightbox.el )
            }
        })
        return View
    }
)


