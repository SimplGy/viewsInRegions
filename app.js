/*globals $, define, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'text!app.tmpl.html',
    'link!lib/bootstrap/css/bootstrap.min.css',
    'link!app.css'
],
    function(appTemplate){
        var App

        // Constructor
        App = function(cfg) {
            $('body').html(
                Mustache.render(appTemplate,cfg)
            )
            document.title = cfg.title
        }
        // Instance methods
        App.prototoype = {

        }


        return App
    }
)


