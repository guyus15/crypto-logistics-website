const container = document.querySelector('.start-now-container');
const options = document.querySelector('#items');
const paypalScripts = document.querySelector('.paypal-scripts');

const standardButton = `
  <script src="https://www.paypal.com/sdk/js?client-id=AVznN8KV3QGXYA88LymkE-BH1du9GRPtvKsAuTncB1hBpHGAfpipKvLkIx2jg4jtmZu4aC25BY_x0vPy&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
  <script>
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
  </script>
`

const premiumButton = `
<script src="https://www.paypal.com/sdk/js?client-id=AVznN8KV3QGXYA88LymkE-BH1du9GRPtvKsAuTncB1hBpHGAfpipKvLkIx2jg4jtmZu4aC25BY_x0vPy&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
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
</script>
`

const fullButton = `
<script src="https://www.paypal.com/sdk/js?client-id=AVznN8KV3QGXYA88LymkE-BH1du9GRPtvKsAuTncB1hBpHGAfpipKvLkIx2jg4jtmZu4aC25BY_x0vPy&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
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
</script>
`

options.addEventListener('change', () => {
  paypalScripts.innerHTML = ""

  if (options.options[options.selectedIndex].value == "item-1")
  {
    paypalScripts.innerHTML += standardButton;
  } else if (options.options[options.selectedIndex].value == "item-2") {
    paypalScripts.innerHTML += premiumButton;
  } else if (options.options[options.selectedIndex].value == "item-3") {
    paypalScripts.innerHTML += fullButton;
  }
})