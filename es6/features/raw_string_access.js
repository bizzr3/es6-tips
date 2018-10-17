const funcA = (string_) => {
    console.log(typeof string_, string_, string_[0] === string_.raw[0]);
}

funcA`Hello world`;