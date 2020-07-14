
// định nghĩa đối tượng Validator
function Validator(options) {
    let formElement = document.querySelector(options.form);
    
    if (formElement) {
        options.rules.forEach(function (rule) {
            let inputElement = formElement.querySelector(rule.selector);
            let errorElement = inputElement.parentElement.querySelector('.form-message')
           if (inputElement) {
               inputElement.onblur = function () {
                   let errorMessage = rule.test(inputElement.value);
                  
                   if (errorMessage) {
                    errorElement.innerText = errorMessage;
                    inputElement.parentElement.classList.add('invalid')
                   } else {
                       errorElement.innerText = '';
                       
                    inputElement.parentElement.classList.remove('invalid')
                   }

                   
               }
           }
        })
    }
}

// định nghĩa rules
// nguyên tắc của các rules:
// 1. khi có lỗi trả ra message lỗi
// 2. khi hợp lệ k hiện gì thêm
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function () {
            
        }
    }
}