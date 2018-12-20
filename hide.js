//only run if we are in the checkout page
if(typeof Checkout === 'object'){
    if(typeof Checkout.$ === 'function'){
        console.log("live");

        //attach event listener to continue button (we don't know what page we are on)
        let el = window.document.getElementsByClassName("step__footer__continue-btn");
        
        //Save zip code to cookie if the input is available
        el[0].addEventListener("click",function() {
            let zip = window.document.getElementById("checkout_shipping_address_zip").value;
            window.document.cookie = "zipCode=" + zip;
        })


        function getCookieValue(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        }

        //gets current US zip code if applicable
        let currentZip = getCookieValue("zipCode");
        let isApproved = false;
        let approvedZips = ['38501','38502','38503','38506','38583','38574','38570'];
        for (let i = 0; i < approvedZips.length; i++) {
            if(currentZip === approvedZips[i]) {
                isApproved = true;
            }
        }
        //deselects and disables local picup if not approved zip code
        if (!isApproved)
        {
            let firstShipMethod = window.document.getElementById("checkout_shipping_rate_id_shopify-customer20pickup20cookeville20tn-000");
            let shipMethods = window.document.getElementsByClassName('input-radio');
            shipMethods[1].checked = true;
            firstShipMethod.disabled= true;
        }
        }
      }
