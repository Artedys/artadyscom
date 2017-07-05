import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		ipgpsLookup() {
			var params = {
				url: this.get('url')
			};
				
      this.sendAction('ipgpsLookup', params);
    }
  }

});