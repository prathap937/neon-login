
class OoCustom extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
      console.log("Created a web component by title", this.attributes[0].value);
      this.createShadowRoot().innerHTML = `
      <style>
        #quotes {
          display: block;
          font-size: 30px;
        }
      </style>
      <div id="quotes">
      <p>Login</p>
      <input type="text" id="username"></input>
      <input type="text" id="password"></input>
      <button id="signIn">Sign In</button>
      <p id="showText"></p>
      <div>
    `;
    };

     attachedCallback() {
       this.shadowRoot.querySelector('#signIn').addEventListener("click", function(){
         console.log("Inside");
         document.getElementById('showText').innerHTML = "Signed In";
       });
     }
}
// Register the Custom Element:
document.registerElement('oo-custom', OoCustom);

function bindData(el){

  console.log("\n*** DATA BIND", el);

  // Fetch all elements with an 'data-bind' attribute from the shadow DOM:
  let dataBind = el.shadow.querySelectorAll('[data-bind]');

  // Iterate them and assign a value from Custom Element attributes:
  for( let i = 0; i < dataBind.length; i ++ ){
    let val = (el.attributes.getNamedItem(dataBind[i].getAttribute("data-bind")));
    if(val) {
      // Special case of input - may also change the value:
      if(dataBind[i].nodeName == "INPUT"){
        dataBind[i].value = val.value;

        // Only add the listener once:
        if(!el.dataIsBound)
        	dataBind[i].addEventListener("keyup", function(){
          	val.value = dataBind[i].value;
          	// Do bind again:
          	bindData(el);
       	 	});

      } else
        dataBind[i].innerText = val.value; // One way; just display the value
    }
  }
  if(!el.dataIsBound)
    el.dataIsBound = true;
}
