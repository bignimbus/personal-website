define([], function () {
    'use strict';
    return Backbone.Collection.extend({
        "model": Backbone.Model,
        "url": '../php/data/twitter.json',
        "parse": function (response) {
            return response;
        }
    });
});
