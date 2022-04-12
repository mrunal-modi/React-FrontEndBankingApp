import strformat from "strformat";

export const validate = (value, validation, name) => {
    let error = "";
    const validators = {
        "email" : (email) => {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = "{name} is not a valid email."
            return re.test(String(email).toLowerCase());
        },
        "alpha_space": (value) => {
            var re = /^[a-zA-Z ]*$/;
            error = "{name} must be alphabatical only."
            return re.test(value);
        },
        "min_val" : (val, min_char) => {
            min_char = min_char.trim();
            error = `{name} must be minimum of ${min_char} characters long.`
            return val && val.length >= min_char;
        },
        "max_val" : (val, max_char) => {
            max_char = max_char.trim()
            error = `{name} must be maximum of ${max_char} characters long.`
            return val && val.length <= max_char
        },
        "required" : (val) => {
            error = "{name} is required." 
            return val && String(val).trim() != "";
        },
        "float": (string) => {
            var res = value.match(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/);
            error = "{name} must be a valid floating number."
            return (res !== null);
        }
    };

    if(!validation){
        return true;
    }


    let v = {};

    if(typeof validation === 'object' && !Array.isArray(validation)){
        v = validation;
    }else{
        if(validation.includes("||")){
            validation = validation.split("||");
        }else if(typeof validation == 'string'){
            validation = [validation];
        }

        for(let val of validation){
            val = val.split(":");
            v[val[0]] = val[1] || true;
        }
    }

    let flag = true;

    loop1:
    for(let key in v){
        switch(key){
            case "min_val":
            case "max_val":
            case "regex":
                const vd = v[key];
                flag = validators[key](value, vd);
                break loop1;
            default:
                if(validators[key] && !validators[key](value)){
                    flag = false;
                    break loop1;
                }
        }
    }

    if(flag){
        return true;
    }

    return strformat(error, {name: name});
};

export const sum = (value1, value2) => {
    return value1 + value2;
}

export const subtract = (value1, value2) => {
    return value1 - value2;
}
