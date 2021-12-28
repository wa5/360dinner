import React from 'react'
import firebase from 'firebase/compat/app'
import firebaseConfig from '../../firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

function Otp() {
    function mob(){
        firebase.initializeApp(firebaseConfig)
        const uiConfig={
            signInOptions:[
               {provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters:{
                type:'imge',
                size:'normal',
                badge:'bottomleft'
            },
            defaultCountry:'IN'
            
            } 
            ],
callbacks:{
    signInSuccessWihAuthResult:()=>{
        alert('success')
        return true
    }
},
signInSuccessUrl:'http:/localhost:3000/home'

        }
        var ui=new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#fbc',uiConfig)
    }
    return (
        <>
            <div id="fbc"></div>
            <button onClick={()=>{mob()}}>click me</button>
        </>
    )
}

export default Otp
