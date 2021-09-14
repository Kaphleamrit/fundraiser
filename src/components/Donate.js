import React from 'react';
import { Button } from 'react-bootstrap';



const Donate = () => {
    return (
        <div  className = "paragraph">
           <h2 className = "titles">Donate</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
           Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum. 
           Nulla vitae elit libero, a pharetra augue mollis interdum. </p>
        
           <form>
        <Button type="submit" size="lg" className="donateBtn" variant="success">
          <a
            style={{
              textDecoration: "none",
              color: "white"
            }}
            
            href="https://pages.razorpay.com/pl_Hn80ONKFkRF7y9/view"
          >
            Donate
          </a>
        </Button>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_Hn8TeBJP6MtUyn"
          async
        >
        </script>
      </form>
        </div>
    )
}

export default Donate;