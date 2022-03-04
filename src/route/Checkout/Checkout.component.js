import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import CheckoutProgressBar from '../../component/CheckoutProgressBar/CheckoutProgressBar.component';
import ContentWrapper from 'Component/ContentWrapper';

class Checkout extends SourceCheckout{    
    
    renderComponent(progressBarItems, selected){
        const stepValues = Object.values(progressBarItems);
        const stepKeys = Object.keys(progressBarItems);
        const selectedIndex = stepKeys.indexOf(selected);
        
        return(
            <CheckoutProgressBar progressBarItems={stepValues} selected={selectedIndex}/>
        )
    }

    render() {
        return (
            <main block="Checkout">
                {this.renderComponent(this.stepMap, this.props.checkoutStep)}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                  >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;