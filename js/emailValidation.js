class emailValidation {
    selectors = {
        form: '[data-email-js-form]',
    }

    errorMessages = {
        valueMissing: 'Заполните это поле',
    }

    constructor() {
        this.bindEvents()
    }

    validateField(footerInput) {
        const errors = footerInput.validity   
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, errorMessage]) => {
            if(errors[errorType]) {
                errorMessages.push(errorMessage)
            }
        })

        const isValid = errorMessages.length === 0

        footerInput.ariaInvalid = !isValid

        return isValid
    }

    onBlur(event) {
        const {target} = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if(isFormField && isRequired) {
            this.validateField(target)
        }
    }

    onSubmit(event) {
        const inputForm = document.querySelector('.footer__input')
        const background = document.querySelector('.overlay')
        const popup = document.querySelector('.popup-success__wrapper')
        

        const isFormElement = event.target.matches(this.selectors.form)

        if(!isFormElement) {
            return
        }

        const requiredControlElements = [...event.target.elements].filter((required) => required)

        let isFormValid = true

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if(!isFieldValid) {
                isFormValid = false
            }
        })

        if(!isFormValid) {
            event.preventDefault()
            inputForm.classList.add('footer__input--error')
        }

        if(isFormValid) {
            event.preventDefault()
            background.classList.add('_active')
            popup.classList.add('popup_active')
        }
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, { capture: true})
        document.addEventListener('submit', (event) => this.onSubmit(event))
    }
}

new emailValidation()