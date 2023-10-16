import React, { useState } from 'react'
import styles from './Register.module.css'
import homeBg from '../../assets/homebg.jpg'

function Register() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [tnc, setTnc] = useState(false)

    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.length==0 || userName.length==0 || email.length==0 ||mobile.length==0 || tnc==false) {
            setError(true)
        }
        
        if(name && email && userName && mobile && setTnc){
            //TODO: {error && name.length<=0 ?Storing values to localstorage & redux
            const userDetails = {
                name: name,
                username: userName,
                email: email,
                contact: mobile
            }
            localStorage.setItem("userDetails", JSON.stringify(userDetails))
        }
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.leftPanel}>
            <img className={styles.bgimg} src={homeBg} alt="" />
            <h1>Discover new things on Superapp</h1>
        </div>
        <div className={styles.rightPanel}>
            <h1 className={styles.title}>Super App</h1>
            <p className={styles.subtitle}>Create your new account</p>
            
            <form onSubmit={handleSubmit} className={styles.innerContainer}>           
                <input className={styles.textInput} type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                {error && name.length<=0 ? <label>Name is required!</label> : ""}

                <input className={styles.textInput} type="text" name="userName" id="userName" placeholder='UserName' onChange={(e) => setUserName(e.target.value)}/>
                {error && userName.length<=0 ? <label>Username is required!</label> : "" }

                <input className={styles.textInput} type="email" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                {error && email.length<=0 ? <label>Email is required!</label> : "" }

                <input className={styles.textInput} type="text" name="mobile" id="mobile" placeholder='Mobile' onChange={(e) => setMobile(e.target.value)}/>
                {error && mobile.length<=0 ? <label>Mobile Number is required!</label> : "" }

                <div className={styles.checkboxDiv}>
                    <input type="checkbox" name="tnc" id="tnc" style={{marginRight: "10px"}} checked={tnc} onClick={() => setTnc(!tnc)}/>
                    <p style={{color: "#7C7C7C", fontSize: "0.8em"}}>Share my registration data with Superapp</p>
                </div>
                {error && tnc == false ? <label>Check this box if you want to proceed</label> : "" }

                <button>SIGN UP</button>

                <p className={styles.otherText}>By clicking on Sign up. you agree to Superapp <a href='/'>Terms and Conditions of Use</a></p>

                <p className={styles.otherText}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href='/'>Privacy Policy</a></p>
            </form>
        </div>
    </div>
  )
}

export default Register