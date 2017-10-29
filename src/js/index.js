var model = {

  init: function(){
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function(){
    this.mainLogo = document.querySelector('.main-logo');
    this.logoBis = document.querySelector('.logo-bis');
    this.formSignup = document.querySelector('.form-signup');
  },
  bindEvents: function(){
    this.mainLogo.addEventListener('click', function(){
      this.classList.toggle('hide-top');
      model.logoBis.classList.replace('hide-left', 'show');
      model.formSignup.classList.replace('hide-right', 'show');
    })
  }

}

model.init();
