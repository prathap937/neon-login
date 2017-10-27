Polymer({
  is: 'flytxt-oidc-login',

  properties: {

    /**
     * The login url for the application.
     */
    src: String,

    /**
     * The property to which authenticated user will be bound. Observe this property to detect successful login.
     */
    user: {
      type: Object,
      value: false,
      notify: true
    }
  },

  attached: function() {
    var me = this;
    me.async(function() {
      window.addEventListener('message', function(message) {
        if (typeof message.data === 'object') {
          me.set('user', message.data);
        }
      });
    });
  }

});
