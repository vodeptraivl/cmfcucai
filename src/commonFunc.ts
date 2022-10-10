import { sha256 } from 'js-sha256';

export class CommonFunction {
    key = "vola2022";
    emailValidate(email: string): boolean {
        return new RegExp(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/).test(email);
    }

    smallUUID() {
        return 'xxxvxxxlxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    UUIDV4() {
        return 'xxxVxxxxx-xxOxx-Lxxx-Axxx-xxxVxxxxxxxxLx'.replace(/[xy]/g, (c) => {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getByteLength(value: string) {
        var utf8length = 0;
        for (var n = 0; n < value.length; n++) {
            var c = value.charCodeAt(n);
            if (c < 128) {
                utf8length++;
            } else if ((c > 127) && (c < 2048)) {
                utf8length = utf8length + 2;
            } else {
                utf8length = utf8length + 3;
            }
            return utf8length;
        }
    }

    compare2Object(a: Object, b: Object) {
        let stra = JSON.stringify(a, (k, v) => v && typeof v === 'object' ? v : '' + v);
        stra = stra.replace(/"null"/g, `""`).replace(/"undefined"/g, `""`)
        let strb = JSON.stringify(b, (k, v) => v && typeof v === 'object' ? v : '' + v);
        strb = strb.replace(/"null"/g, `""`).replace(/"undefined"/g, `""`)
        return strb == strb
    }

    formatDecimal(value: string, decimal: number) {
        value = value.toString().replace(/\,/g, '');
        if (isNaN(Number(value))) {
            return value;
        }
        if (value.indexOf('.') !== -1 &&
            value.slice(0, value.indexOf('.') + 1).length > decimal) {
            return value.slice(0, value.indexOf('.') + decimal + 1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        } else {
            return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    }

    checkDouble(valueCheck: string) {
        if (valueCheck.toString() == null || valueCheck.toString() == "") {
            return false;
        } else {
            if ((valueCheck.toString().charAt(0) == '0' && valueCheck.length > 1) || valueCheck.toString().charAt(0) == '-') {
                return false;
            }
        }
        let numbers = new RegExp(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/);
        if (!numbers.test(valueCheck.toString())) {
            return false;
        }
        return true;
    }

    setSelectionRange(input: any, selectionStart: number, selectionEnd: number) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }

    createUrlQuery(data: any) {
        let keys = Object.keys(data);
        let arrUrlQuery: any[] = [];
        keys.forEach(key => {
            let query = [key, data[key]].join("=");
            arrUrlQuery.push(query);
        });
        return "?" + arrUrlQuery.join("&");
    }

    replaceAll(value: string, search: string, replaceWith: string) {
        let redg = new RegExp(search, "g")
        return (typeof (value) == "string") ? value.replace(redg, replaceWith) : value;
    }

    setCookie(nameCookie: string, data: string) {
        // Build the expiration date string:
        var expiration_date = new Date();
        expiration_date.setFullYear(expiration_date.getFullYear() + 1);
        document.cookie = nameCookie + "=" + data + ";path=/; expires=" + expiration_date.toUTCString();
    }

    getcookie(name: string) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2];
        } else {
            return null;
        }
    }

    delAllCookie() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            if (cookie.indexOf('lang') > -1 || cookie.indexOf('sysname') > -1 || cookie.indexOf('redirect') > -1) {
                continue;
            }
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=delete;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    deleteCookie(nameCookie: string) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            if (cookie.indexOf(nameCookie) > -1) {
                document.cookie = nameCookie + "=delete;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
    }
    
    OTP(secret_key: string, otp_valid_for_secs = 30, date = new Date(), lengthToken = 6) {
        if (secret_key == null) {
            throw "serect key not found";
        }
        let  timeKey: any = this.getTimeKey(date,otp_valid_for_secs);
        let hashed_value = sha256(timeKey + secret_key);
        let last_six_characters = hashed_value?.substr(hashed_value.length - (lengthToken == 6 ? 5 : 6)) || '0';
        let otp = parseInt(last_six_characters, 16);
        let otp_string = otp.toString();
        while (otp_string.length < lengthToken) {
            otp_string = "0" + otp_string;
        }
        return otp_string;
    }

    checkOTP(otp: any, secret_key: any, otp_valid_for_secs = 30, date = new Date(), lengthToken = 6) {
        if (otp == null) {
            throw "otp for check not found";
        }
        if (secret_key == null) {
            throw "serect key not found";
        }
        return otp == this.OTP(secret_key, otp_valid_for_secs, date, lengthToken);
    }

    //https://worldtimeapi.org/api/timezone/Etc/UTC
    getTimeKey(date: Date = new Date(), otp_valid_for_secs = 30) {
        return Math.floor(Math.floor(date.getTime() / 1000) / otp_valid_for_secs);
    }

}