import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    ipgpsLookup(params) {
      this.transitionTo('getip-gps-results', params.url);
    }
  }

});