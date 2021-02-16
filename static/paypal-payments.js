const options = document.querySelector('#items');
const paypalContainer = document.querySelector('#paypal-button-container');

paypal.Buttons({
  style: {
      shape: 'pill',
      color: 'silver',
      layout: 'vertical',
      label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      'plan_id': 'P-84G57859S5359031DMAWB4BQ'
    });
  },
  onApprove: function(data, actions) {
    alert(data.subscriptionID);
  }
}).render('#paypal-button-container');

options.addEventListener('change', () => {

  paypalContainer.innerHTML = "";

  if (options.options[options.selectedIndex].value == "item-1")
  {
    paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'silver',
            layout: 'vertical',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            'plan_id': 'P-84G57859S5359031DMAWB4BQ'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID);
        }
    }).render('#paypal-button-container');
  } else if (options.options[options.selectedIndex].value == "item-2") {
      paypal.Buttons({
          style: {
              shape: 'pill',
              color: 'silver',
              layout: 'vertical',
              label: 'subscribe'
          },
          createSubscription: function(data, actions) {
            return actions.subscription.create({
              'plan_id': 'P-2WT76139PW990912VMAWB6YQ'
            });
          },
          onApprove: function(data, actions) {
            alert(data.subscriptionID);
          }
      }).render('#paypal-button-container');
  } else if (options.options[options.selectedIndex].value == "item-3") {
      paypal.Buttons({
          style: {
              shape: 'pill',
              color: 'silver',
              layout: 'vertical',
              label: 'subscribe'
          },
          createSubscription: function(data, actions) {
            return actions.subscription.create({
              'plan_id': 'P-64H356549H398381UMAWCAOA'
            });
          },
          onApprove: function(data, actions) {
            alert(data.subscriptionID);
          }
      }).render('#paypal-button-container');
  }
});