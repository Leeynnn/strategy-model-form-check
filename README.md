# strategy-model-form-check
This is a fromCheck.js with strategy model.Instances can extend their own policy class.

For example

let formCheck = new FormCheck()
formCheck.addRule('newrule', (value, errMsg) => {
    if (value === 0) {
      return  errMsg
    }
})
formCheck.add(value1, [
    {
        rule: 'isEmpty',
        errMsg: 'it should not be empty'
    }
]).add(value2, [
    {
        rule: 'isEmpty',
        errMsg: 'it should not be empty'
    },
    {
        rule: 'isPhone',
        errMsg: 'please enter the right phone number'
    }
]).add(value3, [
    {
        rule: 'maxNumber:15',
        errMsg: 'the max number is 15'
    }
]).add(value4, [
    {
        rule: 'newrule',
        errMsg: 'it should not be 0'
    }
])
let errMsg = formCheck.start()
if (errMsg) {
  alert(errMsg)
} else {
  // ...
}
