console.log("inside connectedCallback");
forgotPasswordAction(){
  var username = this.$.username.value;
  if(username!=''){
    this.$.forgotPasswordModal.style="display:block";
    this.$.content.style="opacity:0.4";
  }
  else{
    this.$.forgotPasswordModalEmpty.style="display:block";
    setTimeout(function(){ this.$.forgotPasswordModalEmpty.style="display:none"; }.bind(this), 3000);
  }
}

closeModal(){
  this.$.forgotPasswordModal.style="display:none";
  this.$.content.style="opacity:1";
  console.log("clicked");
}

passwordReset(){
  this.$.passwordReset.style="display:block";
  setTimeout(function(){
   this.$.forgotPasswordModal.style="display:none";
 }.bind(this), 100);
  setTimeout(function(){
    this.$.passwordReset.style="display:none";
   }.bind(this), 3000);

  this.$.content.style="opacity:1";
}

signInColorChange(){
  if(this.$.username.value && this.$.password.value){
    this.$.signIn.disabled = false;
    this.$.signIn.style="background-color:#F8A02B;color:#FFF;background-image: url(../../images/arrow-white.svg);cursor:pointer";
  }
  else{
    this.$.signIn.disabled = true;
    this.$.signIn.style="background-color:#eaeaea;color:#a8a8a8;background-image: url(../../images/arrow-orange.svg);cursor:auto";
  }
}

sendRequest(e){
  e.preventDefault();
  // console.log(this.bgColor);
var username = this.$.username.value;
var password = this.$.password.value;
var rememberMe = this.$.rememberMe.checked;

var ironAjax=this.$.xhr;
ironAjax.body = 'username='+username+'&password='+password+'&remember-me='+rememberMe;
ironAjax.url = this.loginUrl;
console.log(ironAjax.url);
ironAjax.method = 'post';
ironAjax.generateRequest();
}


handleLogin(r){
var ca=JSON.parse(r.detail.response);
if(ca.authKey != undefined && ca.authKey != ""){
  let myMenu=[
      {icon:'home',lable:'Home1',href:'/menu1',active:'active'},
      {icon:'dashboard',lable:'360° Customer Data1',href:'/menu2',active:''},
      {icon:'dfe',lable:'Data Fusion Engine1',href:'/menu3',active:''},
      {icon:'configuration',lable:'Fulfilment Configuration1',href:'/menu4',active:''},
      {icon:'support',lable:'Support1',href:'/menu5',active:''}

    ];
  // this.dispatch({
  //   type:'UPDATE_MENU_OBJECTS',
  //   MenuObjects:myMenu
  // });
  //
  //
  // let crumbs=[{name:'User',href:'/user'},{name:'User1',href:'/user1'},{name:'User2',href:'/user2'}];
  // this.dispatch({
  //   type:'UPDATE_BREAD_CRUMBS',
  //   crumbs:crumbs
  // });


  this.set('route.path', this.redirectUrl);
  console.log(ca);
}
}
handleErrorResponse(){
  this.invalidUsername=false;
}

checkCapsLock(e) {
var kc;
var sk;
kc = e.keyCode ? e.keyCode : e.which;
sk = e.shiftKey ? e.shiftKey : ((kc === 16) ? true : false);

if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) {
// this.$$('#divCapsLockMsg').style.visibility = 'visible';
this.shadowRoot.querySelector(".capsLockAlert").style="display:block";
console.log("Caps lock on");
} else {
// this.$$('#divCapsLockMsg').style.visibility = 'hidden';
this.shadowRoot.querySelector(".capsLockAlert").style="display:none";

}
}
