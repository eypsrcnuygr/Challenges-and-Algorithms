function strictEquals (a ,b) {
    if(Object.is(a,b)) {
        return true;
    }
    else if (!Object.is(a,b)) {
        if (Object.is(a, -0) || Object.is(b, -0)) {
            return true
        }
        return false
    }
}

console.log(strictEquals({}, {}));