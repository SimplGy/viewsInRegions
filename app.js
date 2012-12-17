/*globals $, define, Mustache */
/*jshint laxcomma:true, asi:true */


define([
    'regions/page',
    'views/overview',
    // App-wide CSS
    'link!lib/bootstrap/css/bootstrap.min.css'
],
    function(regionPage, view){
        var App

        // Constructor
        App = function(cfg) {
            this.curPage = new regionPage({ 'view': new view() })
            $('body').html( this.curPage.el )
        }

        return App
    }
)


