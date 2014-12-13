{
    "validationRules": [
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "firstName",
            "errorMessageKey": "checkout.personalDetails.firstNameInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "firstName",
            "errorMessageKey": "checkout.personalDetails.firstNameInvalid"
        },
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "lastName",
            "errorMessageKey": "checkout.personalDetails.invalidLastName"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "lastName",
            "errorMessageKey": "checkout.personalDetails.lastNameEmpty"
        },
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "address1",
            "errorMessageKey": "checkout.personalDetails.address1Invalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "address1",
            "errorMessageKey": "checkout.personalDetails.Address1Empty"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "phoneNumber",
            "errorMessageKey": "checkout.personalDetails.phoneNumberEmpty"
        },
        {
            "validationType": "isNumber",
            "validationParam": "true",
            "fieldName": "phoneNumber",
            "errorMessageKey": "checkout.personalDetails.phoneNumberInvalid"
        },
        {
            "validationType": "maxLength",
            "validationParam": "10",
            "fieldName": "phoneNumber",
            "errorMessageKey": "checkout.personalDetails.phoneNumberMaxLength"
        },
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "address2",
            "errorMessageKey": "checkout.personalDetails.address2Invalid"
        },
        {
            "validationType": "validateEmail",
            "validationParam": "true",
            "fieldName": "email",
            "errorMessageKey": "checkout.personalDetails.emailInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "email",
            "errorMessageKey": "checkout.personalDetails.emailEmpty"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "creditCardType",
            "errorMessageKey": "checkout.paymentDetails.creditCardTypeEmpty"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "creditCardNumber",
            "errorMessageKey": "checkout.paymentDetails.creditCardNumberEmpty"
        },
        {
            "validationType": "isNumber",
            "validationParam": "true",
            "fieldName": "creditCardNumber",
            "errorMessageKey": "checkout.paymentDetails.creditCardNumberInvalid"
        },
        {
            "validationType": "maxLength",
            "validationParam": "16",
            "fieldName": "creditCardNumber",
            "errorMessageKey": "checkout.paymentDetails.creditCardNumberInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "cVVNumber",
            "errorMessageKey": "checkout.paymentDetails.cVVNumberEmpty"
        },
        {
            "validationType": "isNumber",
            "validationParam": "true",
            "fieldName": "cVVNumber",
            "errorMessageKey": "checkout.paymentDetails.cVVNumberInvalid"
        },
        {
            "validationType": "maxLength",
            "validationParam": "4",
            "fieldName": "cVVNumber",
            "errorMessageKey": "checkout.paymentDetails.cVVMaxLength"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "expirationMonth",
            "errorMessageKey": "checkout.paymentDetails.expirationMonthEmpty"
        },
        {
            "validationType": "isNumber",
            "validationParam": "true",
            "fieldName": "expirationMonth",
            "errorMessageKey": "checkout.paymentDetails.expirationMonthInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "expirationYear",
            "errorMessageKey": "checkout.paymentDetails.expirationYearEmpty"
        },
        {
            "validationType": "isNumber",
            "validationParam": "true",
            "fieldName": "expirationYear",
            "errorMessageKey": "checkout.paymentDetails.expirationYearEmptyInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "postCode",
            "errorMessageKey": "checkout.personalDetails.postCodeEmpty"
        },
        {
            "validationType": "regex",
            "validationParam": "([A-Za-z]*)(.*?)([A-Za-z0-9]{3})",
            "fieldName": "postCode",
            "errorMessageKey": "checkout.personalDetails.postCodeInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "salutation",
            "errorMessageKey": "checkout.personalDetails.salutationEmpty"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "city",
            "errorMessageKey": "checkout.personalDetails.cityEmpty"
        },
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "city",
            "errorMessageKey": "checkout.personalDetails.cityInvalid"
        },
        {
            "validationType": "required",
            "validationParam": "true",
            "fieldName": "state",
            "errorMessageKey": "checkout.personalDetails.stateEmpty;invalidCharacter"
        },
        {
            "validationType": "invalidCharacter",
            "validationParam": ".*[%\"]+.*",
            "fieldName": "state",
            "errorMessageKey": "checkout.personalDetails.stateInvalid"
        }
    ]
}