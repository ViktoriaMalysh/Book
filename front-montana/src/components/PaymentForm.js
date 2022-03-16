// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";
// import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_URL } from "../config";
// import "./payment.css";
// // import useCopy from 'use-copy-to-clipboard'
// import useClipboard from "react-use-clipboard";
// import { Button, Overlay, OverlayTrigger, Popover } from "react-bootstrap";


// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#fce883" },
//       "::placeholder": { color: "#87bbfd" },
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee",
//     },
//   },
// };

// export default function PaymentForm() {
//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();
//   const store = useSelector((state) => state);
//   // const [inputValue, setInputValue] = useState('')
//   // const clipboard = useClipboard();
//   const [isCopied, setCopied] = useClipboard("4242 4242 4242 4242", {successDuration: 1000,
// });

// const [show, setShow] = useState(false);
// const target = useRef(null);


//   const handleCopy = () => {
    
//     setShow(true)
//     setCopied()
//     setTimeout(() => {
//       setShow(false)
//     }, 6000)
//   }
//   // const { copy, CopyToClipboardComponent } = useCopy()

//   const popover = (
//     <Popover id="popover-basic">
//       <Popover.Body>
//         Copied
//       </Popover.Body>
//     </Popover>
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

    

//     if (!error) {
//       try {
//         const { id } = paymentMethod;
//         const price = store.users.currentPrice * 100
//         const response = await axios.post(`${API_URL}payment`, {
//           amount: price,
//           id,
//         });     

//         if (response.data.success) {
//           console.log("Successful payment");
//           setSuccess(true);
//         }
//       } catch (error) {
//         console.log("Error", error);
//       }
//     } else {
//       console.log(error.message);
//     }
//   };

//   return (
//     <>
//       {!success ? (
//         <form onSubmit={handleSubmit}>
//           <fieldset className="FormGroup">
//             <div className="FormRow">
//               <CardElement options={CARD_OPTIONS} />
//             </div>
//           </fieldset>
//         <div className='div-payment'>
//           <p className="p-payment-title1">
//             Test Card: 
//           </p>
//           <span className="span-payment-title">
//             <span className='span-payment'>4242</span>
//             <span className='span-payment'>4242</span>
//             <span className='span-payment'>4242</span>
//             <span className='span-payment'>4242</span>  
//           </span>

//           <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//             <Button variant="success" className="button-copy" onClick={setCopied}>Copy</Button>
//           </OverlayTrigger>

//           <p className="p-payment-title">
//             <span className='span-title'>MM/YY: 12/25</span>
//             <span className='span-title'>CVC: 123</span>
//           </p>
            
//         </div>
//           <p className='p-payment-price'>To Pay: {store.users.currentPrice}</p>

//           <button className='buttom-payment'>Pay</button>
//         </form>
//       ) : (
//         <div>
//           <h2>..
//             Successfull!
//           </h2>
//         </div>
//       )}
//     </>
//   );
// }
