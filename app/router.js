var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  
  this.resource('option1', function(){
    this.resource('projects',function(){
      
    }); 
    
  });

});

export default Router;
