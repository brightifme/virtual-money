 
const Paystack = use('PayStack')
 
/**
 * This class handles all requests for 
 * the checkout flow of the app
 *
 * @class CheckOutController
 */
class CheckOutController {
    /**
     * Begin Transaction Process
     *
     * @method initTransaction
     *
     * @param  {Object} context.request 
     * @param  {Object} context.response 
     *
     * @return {Promise} 
     */
    async initTransaction({ request, response }) {
 
            //.....
            try {
                let paystackResponse = await Paystack.initializeTransaction({
                callback_url:"https://locahost:3333/trans/hooks/paystack", 
                amount: 3000, 
                email: "xyz@abc.com"
                })
            }catch(ex){
 
                console.error(ex.message);
 
                return response.status(400).json({
                    data: null,
                    error: true,
                    message: ex.message
                }); 
            }
 
            return await response.status(200).json({
              data: response.body.data
            });
    }
 
    async fetchCustomer({ request, response }){
 
            //.....
            try {
 
                let paystackResponse = await Paystack.getCustomer({
                    customer_id:'CUS_reu3738we993wsnqah'
                });
            }catch(ex){
 
                console.error(ex.message);
 
                return response.status(400).json({
                    data: null,
                    error: true,
                    message: ex.message
                }); 
            }finally{
 
                return response.status(200).json({
                    data: response.body.data
                })
            }
    }
 
}
 
module.exports = CheckOutController
 