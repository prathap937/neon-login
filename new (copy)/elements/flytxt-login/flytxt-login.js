'use strict';

class FlytxtLogin extends HTMLElement {
  createdCallback() {

     // This element uses Shadow DOM.
     this.createShadowRoot().innerHTML = `
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="866784700351-23mgh36rt70g18n0kago5ud5v19v8la0.apps.googleusercontent.com">
       <div class="containerLogin">
         <div id="content">
           <div class="backgroundShape">

           </div>
           <!-- <div class="hexagon">
         </div> -->
           <div class="root">
             <form>
               <div class="containerl">

                 <img src="../../flytxt-logo-color.svg" alt="flytxt-logo" id="flytxt-icon">
                 <img src="../../images/NEON_LOGO.svg" alt="flytxt-logo" width="96px" height="48px" id="neonDx-icon">
                 <!-- <label><b>Username</b></label> -->
                 <input type="email" placeholder="Username" name="username" id="username" value="flyops@flytxt.com">
                 <!-- <label><b>Password</b></label> -->
                 <input type="password" placeholder="Password" name="password" id="password">
                 <div class="capsLockAlert">
                   <div><img src="../../images/warning.svg" alt="" width="20px" height="20px">
                     <p>Caps Lock is on..!</p>
                   </div>
                   <!-- <p></p> -->
                 </div>
                 <div class="rememberMe">
                   <input type="checkbox" checked="checked" id="rememberMe"> Remember me
                 </div>
                 <button id="signIn" disabled=[[enableForm]] on-click="sendRequest">Sign In</button>
                 <a class="forgotPassword" href="#">Forgot Password?</a>
                 <div class="g-signin2" data-onsuccess="onSignIn"></div>
               </div>
             </form>
           </div>
         </div>
       </div>

       <div id="forgotPasswordModal">
         <div class="modalContent">
           <p>The system will reset your password and send the new password to the registered email ID. Do you want to continue?</p>
           <div class="buttons">
             <button id="no">No</button>
             <button id="yes">Yes</button>
           </div>
         </div>
       </div>

       <div id="forgotPasswordModalEmpty">
         <div class="modalContent">
           <p>Please provide a registered email address.</p>
         </div>
       </div>

       <div id="passwordReset">
         <div class="modalContent">
           <p>Your password has been reset.</p>
         </div>
       </div>

       <style>

          :host{
            --my-bg-color: white;
          }

          .backgroundShape{
            position: absolute;
          }

          .capsLockAlert{
            display: none;
            font-size: 12px;
            font-family: 'Open Sans',sans-serif;
          }
          .capsLockAlert img{
            margin-right: 5px;
          }
          .capsLockAlert p{
            /*display: inline;*/
            MARGIN-TOP: -20PX;
            MARGIN-LEFT: 30PX;
          }



          #forgotPasswordModal{
            background-color: #fff;
            box-shadow: 0px 0px 23px #888888;
            outline: none;
            z-index: 103;
            position: fixed;
            top: 208.203px;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            font-weight: 400;
            left: 272.977px;
            box-sizing: border-box;
            max-height: 516px;
            max-width: 1360px;
            display: none;
            padding: 15px;
          }

          #forgotPasswordModalEmpty,#passwordReset{
            position: fixed;
            background-color: #323232;
            color: #f1f1f1;
            height: 60px;
            min-width: 320px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            border-radius: 2px;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            cursor: default;
            text-align: center;
            line-height: 30px;
            bottom: 45px;
            left: 45px;
            display: none;
          }

          #notifyUser{
            position: fixed;
            background-color: #323232;
            color: #f1f1f1;
            height: 60px;
            min-width: 320px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            border-radius: 2px;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            cursor: default;
            text-align: center;
            line-height: 30px;
            bottom: 45px;
            left: 45px;
            display: none;
          }

          #no, #yes{
          justify-content: center;
          position: relative;
          border: none;
          min-width: 5.14em;
          margin: 0 0.29em;
          outline-width: 0;
          border-radius: 3px;
          cursor: pointer;
          z-index: 0;
          padding: 0.7em 0.57em;
          font-family: 'Open Sans', sans-serif;
          background-color: #006599;
          color: #FFFFFF;
          text-transform: none;
          font-family: 'Open Sans', sans-serif;
          /*float: right;*/
          }
          #no{
            background-color: #fff;
            color: #006599;
          }
          .containerLogin{
            margin-top: 45px;
            position: relative;
          }
          .root{
            padding-top: 75px;
            margin-left: -10px;
          }

          form{
            max-width: 320px;
            /*background-color: var(--my-bg-color);*/
          }
            input[type=email],
            input[type=password] {
              width: 300px;
              padding: 6px 20px;
              margin: 24px 0 18px;
              display: block;
              background-color: var(--my-bg-color);
              border: none;
              border-bottom: 1px solid #ccc;
              box-sizing: border-box;
              font-family: 'Open Sans',sans-serif;
              color: #333;
            }
            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
              color: #7F7F7F;
              font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                font-family: 'Open Sans', sans-serif;
              }
            #signIn {
              background-color: #eaeaea;
              font-family: 'Open Sans',sans-serif;
              color: #a8a8a8;
              padding: 14px 20px;
              margin: 1em 0 2em 0;
              border: none;
              width: 300px;
              display: block;
              background-image: url(../../images/arrow-orange.svg);
              background-repeat: no-repeat;
              background-position: 61% center;
              padding-right: 17%;
              /*float: right;*/
            }
            input:focus{
                outline: none;
            }

            #flytxt-icon{
              margin-right: 96px;
            }




            .rememberMe{
              display: block;
              /*float: right;*/
              margin-left: 200px;
              margin-bottom: 20px;
              font-family: 'Open Sans',sans-serif;
              font-size: 0.7em;
              color: grey;

            }

            .containerl {
              position: relative;
              margin-left: 0;
              left: 120px;
              top: 81px;
            }

            .forgotPassword {
              display: block;
              text-align: center;
              color: #4978bc;
              text-decoration: none;
              font-family: 'Open Sans',sans-serif;
              font-size: 10pt;
            }

       </style>
     `;

     // Update the ticker prices.
    //  this.updateQuotes(); // We'll define this later.
  }
    attachedCallback(){

      // console.log(this.getAttribute('options'));
      // var bgColor = this.getAttribute('bg-color');
      this.style.setProperty('--my-bg-color', this.getAttribute('bg-color'));


      // this.shadowRoot.querySelector('#hex').setAttribute('fill', bgColor);
      // this.shadowRoot.querySelector('#flytxt-icon').src = this.getAttribute('logo1-src');
      // this.shadowRoot.querySelector('#neonDx-icon').src = this.getAttribute('logo2-src');

      var svgObject = this.getAttribute('background-svg');
    //   if(svgObject){
    //   var svgObject = new DOMParser().parseFromString(
    //   svgObject,'application/xml');
    //   var oSerializer = new XMLSerializer();
    //   var sXML = oSerializer.serializeToString(svgObject);
    // }
    this.shadowRoot.querySelector('.backgroundShape').innerHTML = svgObject;
      // console.log(this.getAttribute('background-svg'));
      // this.shadowRoot.querySelector('#hex').setAttribute('fill',this.getAttribute('bg-color'));

      var me = this;
      this.shadowRoot.querySelector('.forgotPassword').addEventListener("click", function() {
          console.log(self);
          var username = me.shadowRoot.querySelector('#username').value;
          console.log(username);
          if(username!=''){
            me.shadowRoot.querySelector('#forgotPasswordModal').style="display:block";
            me.shadowRoot.querySelector('#content').style="opacity:0.4";
          }
          else{
            me.shadowRoot.querySelector('#forgotPasswordModalEmpty').style="display:block";
            setTimeout(function(){ me.shadowRoot.querySelector('#forgotPasswordModalEmpty').style="display:none"; }.bind(me), 3000);
          }
      });

      this.shadowRoot.querySelector('#no').addEventListener("click",function(){
        me.shadowRoot.querySelector('#forgotPasswordModal').style="display:none";
        me.shadowRoot.querySelector('#content').style="opacity:1";
        console.log("clicked");
      });

      this.shadowRoot.querySelector('#yes').addEventListener("click",function(){
        me.shadowRoot.querySelector('#passwordReset').style="display:block";
         setTimeout(function(){
          me.shadowRoot.querySelector('#forgotPasswordModal').style="display:none";
        }.bind(me), 100);
         setTimeout(function(){
           me.shadowRoot.querySelector('#passwordReset').style="display:none";
         }.bind(me), 3000);

         me.shadowRoot.querySelector('#content').style="opacity:1";
      });

      this.shadowRoot.querySelector('#password').addEventListener("input",function(){
        if(me.shadowRoot.querySelector('#username').value.length >0 && (me.shadowRoot.querySelector('#password').value.length >0)){
          me.shadowRoot.querySelector('#signIn').disabled = false;
          me.shadowRoot.querySelector('#signIn').style="background-color:#F8A02B;color:#FFF;background-image: url(../../images/arrow-white.svg);cursor:pointer";
        }
        else{
            me.shadowRoot.querySelector('#signIn').disabled = true;
            me.shadowRoot.querySelector('#signIn').style="background-color:#eaeaea;color:#a8a8a8;background-image: url(../../images/arrow-orange.svg);cursor:auto";
        }
      });

      this.shadowRoot.querySelector('#signIn').addEventListener("click",function(e){
        e.preventDefault();
      // console.log(this.bgColor);
          var username = me.shadowRoot.querySelector('#username').value;
          var password = me.shadowRoot.querySelector('#password').value;
          var rememberMe =  me.shadowRoot.querySelector('#rememberMe').checked;

          var xhttp = new XMLHttpRequest();
          var params = 'username='+username+'&password='+password+'&rememberMe='+rememberMe;
          console.log(params);
          xhttp.open("POST", me.getAttribute('login-url'), true);
          xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

          // var ironAjax=this.$.xhr;
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // document.getElementById("demo").innerHTML = this.responseText;
              location.href=me.getAttribute('redirect-url');
              console.log(this.responseText);
            }
          };
          xhttp.send(params);

      });

      this.shadowRoot.querySelector('#password').addEventListener("keypress",function(e){
        var kc;
        var sk;
        kc = e.keyCode ? e.keyCode : e.which;
        sk = e.shiftKey ? e.shiftKey : ((kc === 16) ? true : false);

        if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) {
          // this.$$('#divCapsLockMsg').style.visibility = 'visible';
          me.shadowRoot.querySelector(".capsLockAlert").style="display:block";
          console.log("Caps lock on");
        } else {
          // this.$$('#divCapsLockMsg').style.visibility = 'hidden';
          me.shadowRoot.querySelector(".capsLockAlert").style="display:none";

        }
      });

      //
      // this.shadowRoot.querySelector('.forgotPassword').addEventListener("click", function() {
      //     var username = this.shadowRoot.querySelector('#username').value;}

      // this.prinat();
    }
}
document.registerElement('flytxt-login', FlytxtLogin);
