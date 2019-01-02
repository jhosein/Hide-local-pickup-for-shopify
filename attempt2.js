//only run if we are in the checkout page
if(typeof Checkout === 'object'){
    if(typeof Checkout.$ === 'function'){
        console.log("live");
        
        
        //Save zip code to cookie if the input is available

        /*el[0].addEventListener("click",function() {
            let zip = window.document.getElementById("checkout_shipping_address_zip").value;
            window.document.cookie = "zipCode=" + zip;
        })


        function getCookieValue(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        */
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
            var conButton = window.document.getElementsByClassName("step__footer__continue-btn");
            console.log(conButton);

            //attach event listener to continue to payment method button
            conButton[0].addEventListener("click",function(e) {
                console.log("Event listener attached");

                //Is Customer Pickup selected?
                let custPickup = window.document.getElementById("checkout_shipping_rate_id_shopify-customer20pickup20cookeville20tn-000");
                let message = "Are you sure you want to pick up your order? Customer pickup is intended to local customers in Cookevile, TN only. Select OK to continue or CANCEL to select another shipping option below."

                if (custPickup.checked === true) {
                    let r = confirm(message)
                    if (r === false){
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }
                }
            })
        };
        }
