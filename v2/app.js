// User input has to be text according to this test
const validateNames =(x) => {
    if(x==="" || !isNaN(x)) {
        return false
    }
    return true
}

module.exports = { 
    add ,
    validateNames 
}