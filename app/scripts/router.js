define([
  // application
  "app",

  // modules
  "modules/todo",
],

function(app, Todo) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
    },

    initialize: function() {
        /*
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);
        */
    },

    index: function() {
      // Create a new Todo List.
      var list = new Todo.List();

      // Use the main layout.
      app.useLayout("main").setViews({
        // Attach the root content View to the layout.
        "form": new Todo.Views.Form({
          collection: list
        }),

        // Attach the stats View into the content View.
        ".stats": new Todo.Views.Stats({
          collection: list
        }),

        // Attach the list View into the content View.
        ".list": new Todo.Views.List({
          collection: list
        })
      }).render();

      // Fetch the data from localStorage
      list.fetch();
    }
  });

  return Router;

});
