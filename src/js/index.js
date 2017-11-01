(function(){
  var model = {

    init: function(){
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function(){
      this.mainLogo = document.querySelector('.intro-logo');
      this.logoBis = document.querySelector('.logo');
      this.formSignup = document.querySelector('.form-signup');
      this.btnSubmit = document.querySelector('.btn-submit');
      this.thanksMsg = document.getElementById('thanks');
      this.clickMsg = document.querySelector('.click-msg');
    },
    bindEvents: function(){
      this.mainLogo.addEventListener('click', this.animateLandPage.bind(this));
      this.btnSubmit.addEventListener('click', this.submitForm.bind(this));
    },
    request: function(url){
      return new Promise(function(resolve, reject){
        const http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.onload = function(){
          if(http.status == 200) {
            resolve(http.response);
          } else {
            reject(http.statusText);
          }
        }
        http.onerror = function(){
          reject(http.statusText);
        }
        http.send(null);
      })
    },
    animateLandPage: function(){
      this.mainLogo.classList.add('hide-top'); //toggle would stop the transition if multiple clicks
      this.logoBis.classList.replace('hide-left', 'show');
      this.formSignup.classList.replace('hide-right', 'show');
      this.clickMsg.classList.add('hide-right');
    },
    submitForm: function(e){
      e.preventDefault();
      // hide the form
      this.formSignup.classList.replace('show', 'hide-right');
      // when form finish its hidden transition
      this.formSignup.addEventListener('transitionend', this.submitSuccess.bind(this), false);
    },
    submitSuccess: function(e){
      //when transition of the form ends, call the ajax request to load the hmtl success message
      if(e.propertyName === 'transform') {
        let promise = model.request('data/submit-done.html');
        promise.then(function(data){
          model.thanksMsg.innerHTML = data;
        }).catch(function(error){
          console.log(error);
        })
      }
    }
  }
  model.init();
})();
