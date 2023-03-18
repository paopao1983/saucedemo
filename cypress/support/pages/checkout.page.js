import CheckoutOneComp from './components/checkoutOneComp.page'
import CheckoutTwoComp from './components/checkoutTwoComp.page'
import CheckoutCompleteComp from './components/checkoutCompleteComp.page'

class Checkout{
  
    get CheckoutOneComp() {
        return CheckoutOneComp;
    }
    get CheckoutTwoComp() {
        return CheckoutTwoComp;
    }
    get CheckoutCompleteComp() {
        return CheckoutCompleteComp;
    }
}
export default new Checkout