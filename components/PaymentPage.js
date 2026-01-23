"use client"
import React,{useEffect, useState} from 'react'
import Script from 'next/script'
import {fetchpayments, initiate,fetchuser} from "../actions/useraction"
import { useSession } from 'next-auth/react'
import { useSearchParams} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const PaymentPage = ({username}) => {
    // const {data:session}=useSession()
    // const [paymentform, setpaymentform] = useState({ })
    const [paymentform, setpaymentform] = useState({ name: '', message: '', amount: '' });
    const [currentUser, setcurrentUser] = useState({ })
    const [payments, setPayments] = useState([ ])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
      getData()
    },[])

    useEffect(() => {
      if(searchParams.get("paymentdone")=="true"){
      toast('Payment has been made!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }
      router.push(`/${username}`)
    }, [])
    
const getData=async()=>{
  let u = await fetchuser(username)
  setcurrentUser(u)
  let dbpayments = await fetchpayments(username)
  setPayments(dbpayments)
}

    const handleChange =(e)=>{
        setpaymentform({...paymentform,[e.target.name]:e.target.value})
    }
    const pay = async(amount)=>{
        let a= await initiate(amount,username,paymentform)
        let orderId=a.id
        var options ={
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me a chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
           "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
            "name": "Gaurav Kumar",
           "email": "gaurav.kumar@example.com",
            "contact": "9000090000" 
            },
               "notes": {
                   "address": "Razorpay Corporate Office"
               },
               "theme": {
                   "color": "#3399cc"
               }
              }
      
          var rzp1 = new Razorpay(options);
          rzp1.open();
    }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    {/* <button id="rzp-button1">Pay</button> */}
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className='cover w-full relative'>
        <img className='w-full object-cover md:h-[350] h-48' src={currentUser.coverpic} alt="png" />
        <div className='profilePic md:-bottom-16 -bottom-24 md:right-[45%] right-[32%] absolute'>
          <img className='rounded-full border-white border-2' width={150} height={150} src={currentUser.profilepic} alt="profile" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-28 md:my-20 gap-2'>
        <div className='text-3xl font-bold'>
          @{username}
        </div>
        <div className='text-slate-300'>
          Lets help {username} get a chai!
        </div>
        <div className='text-slate-400'>
          {payments.length} Payments . ₹{payments.reduce((a,b)=>a+b.amount,0)} raised
        </div>
        <div className="payment flex flex-col md:flex-row gap-3 w-[80%] mt-10">
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Top 10 Supporters</h2>
            <ul>
              {payments.length == 0 && <li>No Payments yet</li>}
              {payments.map((p,i)=>{
              return <li key={i} className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="gif" />
                <span>{p.name} donated <b>₹{p.amount}</b> with a message "{p.message}"</span>
              </li>
            })} 
            </ul>
          </div>
          <div className="makepayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Make Payment</h2>
            <div>
              <input onChange={handleChange} value={paymentform.name} name="name" type="text" className="w-full bg-slate-600 p-2 my-2 rounded-xl" placeholder="Enter Your Name" ></input>
              <input onChange={handleChange} value={paymentform.message} name="message" type="text" className="w-full bg-slate-600 p-2 my-2 rounded-xl" placeholder="Enter Message" ></input>
              <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className="w-full bg-slate-600 p-2 my-2 rounded-xl" placeholder="Enter amount" ></input>
            </div>
            <div className='flex gap-3'>
              <button className='bg-slate-600 w-24 text-white p-2 rounded-lg my-5' disabled={paymentform.name?.length<3 || paymentform.message?.length<4} onClick={()=>pay(1000)}>₹10</button>
              <button className='bg-slate-600 w-24 text-white p-2 rounded-lg my-5' disabled={paymentform.name?.length<3 || paymentform.message?.length<4} onClick={()=>pay(2000)}>₹20</button>
              <button className='bg-slate-600 w-24 text-white p-2 rounded-lg my-5' disabled={paymentform.name?.length<3 || paymentform.message?.length<4} onClick={()=>pay(3000)}>₹30</button>
            </div>
            <div>
              <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-green-400 mt-3 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:to-blue-400 disabled:from-green-300" disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}>Pay</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage

