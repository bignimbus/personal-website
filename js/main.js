require(['router', 'models/main'],
function (Router, ParentModel) {
    'use strict';
    var app = {};
    app.model = new Backbone.Model();
    app.router = new Router({"model": app.model});

    Backbone.history.start();

    return app.router;
});
