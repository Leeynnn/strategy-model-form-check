
let FormCheck = function () {
    this.cache = []
}
let rulesObj = {
    isEmpty (value, errMsg) {
        if (value == '' || value == void 0) {
            return errMsg
        }
    },
    isPhone (value, errMsg) {
        if (!/^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/.test(value)) {
            return errMsg
        }
    }
}
FormCheck.prototype.add = function (dom, rules) {
    let that = this
    rules.forEach((value, key) => {
        let _rules = value.rule.split(':')
        let _errMsg = value.errMsg
        that.cache.push(function () {
            let _rule = _rules.shift()
            _rules.unshift(dom)
            _rules.push(_errMsg)
            return rulesObj[_rule].apply(dom, _rules)
        })
    })
    return this
}
FormCheck.prototype.start = function () {
    for (let i in this.cache) {
        let errMsg = this.cache[i]()
        if (errMsg) {
            return errMsg
        }
    }
}
FormCheck.prototype.addRule = function (rule, fn) {
    if (rule in rulesObj) {
        console.log('It already has this rule!')
    } else {
        rulesObj[rule] = fn
    }
}
FormCheck.prototype.showRules = function () {
    for (let rule in rulesObj) {
        console.log(rule)
    }
}
export default FormCheck
