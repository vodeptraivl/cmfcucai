export class CommonFunction {
    emailValidate(email: string): boolean {
        return new RegExp(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/).test(email);
    }

    smallUUID() {
        return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
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
}