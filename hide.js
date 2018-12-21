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
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        //Are we on shipping options page?
        if(getParameterByName('step') === "shipping_method")
        {
            console.log('on shipping page');

            //gets current US zip code if applicable
            var currentZip = getCookieValue("zipCode");
            var isApproved = false;
            var approvedZips = ['38501','38502','38503','38506','38583','38574','38570'];
            for (let i = 0; i < approvedZips.length; i++) {
                if(currentZip === approvedZips[i]) {
                    isApproved = true;
                }
            }
            //assuming shipping is already populated, run deselect()
            deselect();

            //TODO assuming shipping did not populate, run deslect() after
            

            //deselects and disables local picup if not approved zip code
            function deselect() {
                if (!isApproved)
                {
                    console.log('is not approved');
                    let firstShipMethod = window.document.getElementById("checkout_shipping_rate_id_shopify-customer20pickup20cookeville20tn-000");
                    let shipMethods = window.document.getElementsByClassName('input-radio');
                    shipMethods[1].checked = true;
                    firstShipMethod.disabled = true;
                }
            }


           /* let isLoading = true;
            while(isLoading){
                let spinner = window.document.getElementsByClassName("blank-slate");
                if (spinner.length = 0)
                isLoading = false;
                console.log("waiting..");
            }*/

        }
        }
      }

