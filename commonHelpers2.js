import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function n(){return`
    <form class="feedback-form" autocomplete="off">
      <label>
        Email
        <input type="email" name="email" autofocus />
      </label>
      <label>
        Message
        <textarea name="message" rows="8"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  `}const r=document.getElementById("form-container");r.innerHTML=n();const o=document.querySelector(".feedback-form"),l="feedback-form-state";o.addEventListener("input",s);o.addEventListener("submit",c);let t=i();function s(a){const{email:e,message:m}=o.elements;t={email:e.value.trim(),message:m.value.trim()},localStorage.setItem(l,JSON.stringify(t))}function i(){return JSON.parse(localStorage.getItem(l))||{}}function u(){const{email:a,message:e}=o.elements;t&&(a.value=t.email||"",e.value=t.message||"")}function c(a){a.preventDefault();const{email:e,message:m}=o.elements;if(e.value.trim()===""||m.value.trim()==="")return alert("Please fill in all the fields!");console.log({email:e.value,message:m.value}),localStorage.removeItem(l),a.currentTarget.reset(),t={}}u();
//# sourceMappingURL=commonHelpers2.js.map
