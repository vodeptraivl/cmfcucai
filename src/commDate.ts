export class CommonFuncDate {
    patternDate = [
        "YYYY/MM/DD", "YYYY.MM.DD", "YYYY-MM-DD", "YYYYMMDD",
        "DD/MM/YYYY", "DD.MM.YYYY", "DD-MM-YYYY", "DDMMYYYY",
        "MMDDYYYY", "MM/DD/YYYY", "MM-DD-YYYY", "MM.DD.YYYY",
        "YYYYDDMM", "YYYY/DD/MM", "YYYY-DD-MM", "YYYY.DD.MM",
        "YYYYMMDD HH,MM,SS", "YYYYMMDDHH,MM,SS", "YYYYMMDD HHMISS", "YYYYMMDDHHMISS",
        "YYYYMMDD HH,MM","YYYYMMDDHH,MM","YYYYMMDD HHMI","YYYYMMDDHHMI", "YYYY/MM/DD HH,MM,SS",
        "YYYY/MM/DDHH,MM,SS","YYYY/MM/DD HHMISS","YYYY/MM/DDHHMISS","YYYY/MM/DD HH,MM","YYYY/MM/DDHH,MM",
        "YYYY/MM/DD HHMI","YYYY/MM/DDHHMI","YYYY-MM-DD HH,MM,SS","YYYY-MM-DDHH,MM,SS",
        "YYYY-MM-DD HHMISS","YYYY-MM-DDHHMISS","YYYY-MM-DD HH,MM","YYYY-MM-DDHH,MM","YYYY-MM-DD HHMI",
        "YYYY-MM-DDHHMI","YYYY.MM.DD HH,MM,SS","YYYY.MM.DDHH,MM,SS","YYYY.MM.DD HHMISS","YYYY.MM.DDHHMISS",
        "YYYY.MM.DD HH,MM","YYYY.MM.DDHH,MM",
        "YYYY.MM.DD HHMI",
        "YYYY.MM.DDHHMI",
        "YYYYDDMM HH,MM,SS",
        "YYYYDDMMHH,MM,SS",
        "YYYYDDMM HHMISS",
        "YYYYDDMMHHMISS",
        "YYYYDDMM HH,MM",
        "YYYYDDMMHH,MM",
        "YYYYDDMM HHMI",
        "YYYYDDMMHHMI",
        "YYYY/DD/MM HH,MM,SS",
        "YYYY/DD/MMHH,MM,SS",
        "YYYY/DD/MM HHMISS",
        "YYYY/DD/MMHHMISS",
        "YYYY/DD/MM HH,MM",
        "YYYY/DD/MMHH,MM",
        "YYYY/DD/MM HHMI",
        "YYYY/DD/MMHHMI",
        "YYYY-DD-MM HH,MM,SS",
        "YYYY-DD-MMHH,MM,SS",
        "YYYY-DD-MM HHMISS",
        "YYYY-DD-MMHHMISS",
        "YYYY-DD-MM HH,MM",
        "YYYY-DD-MMHH,MM",
        "YYYY-DD-MM HHMI",
        "YYYY-DD-MMHHMI",
        "YYYY.DD.MM HH,MM,SS",
        "YYYY.DD.MMHH,MM,SS",
        "YYYY.DD.MM HHMISS",
        "YYYY.DD.MMHHMISS",
        "YYYY.DD.MM HH,MM",
        "YYYY.DD.MMHH,MM",
        "YYYY.DD.MM HHMI",
        "YYYY.DD.MMHHMI",
        "DDMMYYYY HH,MM,SS",
        "DDMMYYYYHH,MM,SS",
        "DDMMYYYY HHMISS",
        "DDMMYYYYHHMISS",
        "DDMMYYYY HH,MM",
        "DDMMYYYYHH,MM",
        "DDMMYYYY HHMI",
        "DDMMYYYYHHMI",
        "DD/MM/YYYY HH,MM,SS",
        "DD/MM/YYYYHH,MM,SS",
        "DD/MM/YYYY HHMISS",
        "DD/MM/YYYYHHMISS",
        "DD/MM/YYYY HH,MM",
        "DD/MM/YYYYHH,MM",
        "DD/MM/YYYY HHMI",
        "DD/MM/YYYYHHMI",
        "DD-MM-YYYY HH,MM,SS",
        "DD-MM-YYYYHH,MM,SS",
        "DD-MM-YYYY HHMISS",
        "DD-MM-YYYYHHMISS",
        "DD-MM-YYYY HH,MM",
        "DD-MM-YYYYHH,MM",
        "DD-MM-YYYY HHMI",
        "DD-MM-YYYYHHMI",
        "DD.MM.YYYY HH,MM,SS",
        "DD.MM.YYYYHH,MM,SS",
        "DD.MM.YYYY HHMISS",
        "DD.MM.YYYYHHMISS",
        "DD.MM.YYYY HH,MM",
        "DD.MM.YYYYHH,MM",
        "DD.MM.YYYY HHMI",
        "DD.MM.YYYYHHMI",
        "MMDDYYYY HH,MM,SS",
        "MMDDYYYYHH,MM,SS",
        "MMDDYYYY HHMISS",
        "MMDDYYYYHHMISS",
        "MMDDYYYY HH,MM",
        "MMDDYYYYHH,MM",
        "MMDDYYYY HHMI",
        "MMDDYYYYHHMI",
        "MM/DD/YYYY HH,MM,SS",
        "MM/DD/YYYYHH,MM,SS",
        "MM/DD/YYYY HHMISS",
        "MM/DD/YYYYHHMISS",
        "MM/DD/YYYY HH,MM",
        "MM/DD/YYYYHH,MM",
        "MM/DD/YYYY HHMI",
        "MM/DD/YYYYHHMI",
        "MM-DD-YYYY HH,MM,SS",
        "MM-DD-YYYYHH,MM,SS",
        "MM-DD-YYYY HHMISS",
        "MM-DD-YYYYHHMISS",
        "MM-DD-YYYY HH,MM",
        "MM-DD-YYYYHH,MM",
        "MM-DD-YYYY HHMI",
        "MM-DD-YYYYHHMI",
        "MM.DD.YYYY HH,MM,SS",
        "MM.DD.YYYYHH,MM,SS",
        "MM.DD.YYYY HHMISS",
        "MM.DD.YYYYHHMISS",
        "MM.DD.YYYY HH,MM",
        "MM.DD.YYYYHH,MM",
        "MM.DD.YYYY HHMI",
        "MM.DD.YYYYHHMI",
        "MMDD",
        "MM/DD",
        "MM-DD",
        "MM.DD",
        "DDMM",
        "DD/MM",
        "DD-MM",
        "DD.MM",
        "MDD",
        "M/DD",
        "M-DD",
        "M.DD",
        "DDM", "DD/M", "DD-M", "DD.M", "MD", "M/D", "M.D", "DM", "D/M", "D.M", "M-D", "D-M"
    ]
    isDateWithFormat(value: string, pattern = "YYYY/MM/DD") {
        if (value == null || value == "") return;
        let pd = ['((?:19|20)[0-9]{2,2})', '(0[1-9]|1[012])', '(0[1-9]|[12][0-9]|3[01])', '[/]', '[-]', '[.]'];
        if (value != null && value != "") {
            pattern = pattern.toUpperCase();
            switch (pattern) {
                case "YYYY/MM/DD":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[/](0[1-9]|1[012])[/]([123]0|[012][1-9]|31)$/g).test(value));
                case "YYYY.MM.DD":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.](0[1-9]|1[012])[.]([123]0|[012][1-9]|31)$/g).test(value));
                case "YYYY-MM-DD":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-](0[1-9]|1[012])[-]([123]0|[012][1-9]|31)$/g).test(value));
                case "YYYYMMDD":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)$/g).test(value));
                case "DD/MM/YYYY":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[/](0[1-9]|1[012])[/](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "DD.MM.YYYY":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "DD-MM-YYYY":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "DDMMYYYY":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "MMDDYYYY":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "MM/DD/YYYY":
                    return (new RegExp(/^(0[1-9]|1[012])[/]([123]0|[012][1-9]|31)[/](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "MM-DD-YYYY":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "MM.DD.YYYY":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})$/g).test(value));
                case "YYYYDDMM":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])$/g).test(value));
                case "YYYY/DD/MM":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[/]([123]0|[012][1-9]|31)[/](0[1-9]|1[012])$/g).test(value));
                case "YYYY-DD-MM":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])$/g).test(value));
                case "YYYY.DD.MM":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])$/g).test(value));
                case "YYYYMMDD HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([ ]{0,1}([01][0-9]|2[0-3])[:]{0,1}([0-5][0-9])[:]{0,1}([0-5][0-9]){0,1}){0,1}$/g).test(value));
                case "YYYYMMDDHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{0,1}([0-5][0-9])[:]{0,1}([0-5][0-9]){0,1}){0,1}$/g).test(value));
                case "YYYYMMDD HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([ ]{0,1}([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){0,1}){0,1}$/g).test(value));
                case "YYYYMMDDHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){0,1}){0,1}$/g).test(value));
                case "YYYYMMDD HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([ ]{0,1}([01][0-9]|2[0-3])[:]{0,1}([0-5][0-9])){0,1}$/g).test(value));
                case "YYYYMMDDHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{0,1}([0-5][0-9])){0,1}$/g).test(value));
                case "YYYYMMDD HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([ ]{0,1}([01][0-9]|2[0-3])([0-5][0-9])){0,1}$/g).test(value));
                case "YYYYMMDDHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){0,1}$/g).test(value));
                case "YYYY/MM/DD HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY/MM/DDHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY/MM/DD HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY/MM/DDHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY/MM/DD HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY/MM/DDHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY/MM/DD HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY/MM/DDHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(\/)(0[1-9]|1[012])(\/){1,1}([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY-MM-DD HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY-MM-DDHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY-MM-DD HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY-MM-DDHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY-MM-DD HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY-MM-DDHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY-MM-DD HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY-MM-DDHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(-)(0[1-9]|1[012])(-)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY.MM.DD HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY.MM.DDHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])[:]{1,1}([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY.MM.DD HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY.MM.DDHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]){1,1}){1,1}$/g).test(value));
                case "YYYY.MM.DD HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)([ ]{1,1}([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY.MM.DDHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])[:]{1,1}([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY.MM.DD HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYY.MM.DDHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(.)(0[1-9]|1[012])(.)([123]0|[012][1-9]|31)(([01][0-9]|2[0-3])([0-5][0-9])){1,1}$/g).test(value));
                case "YYYYDDMM HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYYDDMMHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYYDDMM HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYYDDMMHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYYDDMM HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYYDDMMHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYYDDMM HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYYDDMMHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})([123]0|[012][1-9]|31)(0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MM HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MMHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MM HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MMHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MM HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MMHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MM HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYY/DD/MMHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[\/]([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MM HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MMHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MM HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MMHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MM HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MMHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MM HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYY-DD-MMHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[-]([123]0|[012][1-9]|31)[-](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MM HH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MMHH:MI:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MM HHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MMHHMISS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MM HH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MMHH:MI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MM HHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "YYYY.DD.MMHHMI":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[.]([123]0|[012][1-9]|31)[.](0[1-9]|1[012])(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DDMMYYYY HH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DDMMYYYYHH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DDMMYYYY HHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DDMMYYYYHHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DDMMYYYY HH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DDMMYYYYHH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DDMMYYYY HHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DDMMYYYYHHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYY HH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYYHH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYY HHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYYHHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYY HH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYYHH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYY HHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD/MM/YYYYHHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[\/](0[1-9]|1[012])[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYY HH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYYHH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYY HHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYYHHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYY HH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYYHH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYY HHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD-MM-YYYYHHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYY HH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYYHH:MI:SS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYY HHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYYHHMISS":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYY HH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYYHH:MI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYY HHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "DD.MM.YYYYHHMI":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MMDDYYYY HH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MMDDYYYYHH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MMDDYYYY HHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MMDDYYYYHHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MMDDYYYY HH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MMDDYYYYHH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MMDDYYYY HHMI":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MMDDYYYYHHMI":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)(19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYY HH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYYHH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYY HHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYYHHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYY HH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYYHH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYY HHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM/DD/YYYYHHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[\/]([123]0|[012][1-9]|31)[\/](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYY HH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYYHH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYY HHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYYHHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYY HH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYYHH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYY HHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM-DD-YYYYHHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)[-](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYY HH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYYHH:MI:SS":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9])[:]([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYY HHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYYHHMISS":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYY HH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})([ ]([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYYHH:MI":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])[:]([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYY HHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MM.DD.YYYYHHMI":
                    return (new RegExp(/^(0[1-9]|1[012])[.]([123]0|[012][1-9]|31)[.](19[0-9]{2}|2[0-9]{3})(([01][0-9]|2[0-3])([0-5][0-9]))$/g).test(value));
                case "MMDD":
                    return (new RegExp(/^(0[1-9]|1[012])([123]0|[012][1-9]|31)$/g).test(value));
                case "MM/DD":
                    return (new RegExp(/^(0[1-9]|1[012])[/]([123]0|[012][1-9]|31)$/g).test(value));
                case "MM-DD":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)$/g).test(value));
                case "MM.DD":
                    return (new RegExp(/^(0[1-9]|1[012])[-]([123]0|[012][1-9]|31)$/g).test(value));
                case "DDMM":
                    return (new RegExp(/^([123]0|[012][1-9]|31)(0[1-9]|1[012])$/g).test(value));
                case "DD/MM":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[/](0[1-9]|1[012])$/g).test(value));
                case "DD-MM":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-](0[1-9]|1[012])$/g).test(value));
                case "DD.MM":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.](0[1-9]|1[012])$/g).test(value));
                case "MDD":
                    return (new RegExp(/^([1-9])([123]0|[012][1-9]|31)$/g).test(value));
                case "MD":
                    return (new RegExp(/^([1-9])([1-9])$/g).test(value));
                case "M/D":
                    return (new RegExp(/^([1-9])[/]([1-9])$/g).test(value));
                case "M.D":
                    return (new RegExp(/^([1-9])[.]([1-9])$/g).test(value));
                case "M.D":
                    return (new RegExp(/^([1-9])[-]([1-9])$/g).test(value));
                case "DM":
                    return (new RegExp(/^([1-9])([1-9])$/g).test(value));
                case "D/M":
                    return (new RegExp(/^([1-9])[/]([1-9])$/g).test(value));
                case "D.M":
                    return (new RegExp(/^([1-9])[.]([1-9])$/g).test(value));
                case "D.M":
                    return (new RegExp(/^([1-9])[-]([1-9])$/g).test(value));
                case "M/DD":
                    return (new RegExp(/^([1-9])[/]([123]0|[012][1-9]|31)$/g).test(value));
                case "M-DD":
                    return (new RegExp(/^([1-9])[-]([123]0|[012][1-9]|31)$/g).test(value));
                case "M.DD":
                    return (new RegExp(/^([1-9])[.]([123]0|[012][1-9]|31)$/g).test(value));
                case "DDM":
                    return (new RegExp(/^([1-9])([123]0|[012][1-9]|31)$/g).test(value));
                case "DD/M":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[/]([1-9])$/g).test(value));
                case "DD-M":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[-]([1-9])$/g).test(value));
                case "DD.M":
                    return (new RegExp(/^([123]0|[012][1-9]|31)[.]([1-9])$/g).test(value));
            }
        }
        return false
    }

    extracDateStr(value: string) {
        if (value == null || value == "") return;
        for (let i = 0; i < this.patternDate.length; i++) {
            if (this.isDateWithFormat(value, this.patternDate[i])) {
                let res = {
                    date: true,
                    format: this.patternDate[i],
                    year: '',
                    month: '',
                    day: '',
                    hour: '',
                    minute: '',
                    second: ''
                }
                let iYear = this.patternDate[i].indexOf('YYYY'),
                    iMonth = this.patternDate[i].indexOf('MM'),
                    iM = this.patternDate[i].indexOf('M'),
                    iday = this.patternDate[i].indexOf('DD'),
                    iD = this.patternDate[i].indexOf('D'),
                    ihour = this.patternDate[i].indexOf('HH'),
                    iminute = this.patternDate[i].indexOf('MI'),
                    isecond = this.patternDate[i].indexOf('SS');
                if (iYear > -1) res.year = value.substring(iYear, iYear + 4);
                if (iMonth > -1) res.month = value.substring(iMonth, iMonth + 2);
                if (iday > -1) res.day = value.substring(iday, iday + 2);
                if (ihour > -1) res.hour = value.substring(ihour, ihour + 2);
                if (iminute > -1) res.minute = value.substring(iminute, iminute + 2);
                if (isecond > -1) res.second = value.substring(isecond, isecond + 2);
                if (iMonth == -1 && iM > -1) res.month = '0' + value.substring(iM, iM + 1);
                if (iday == -1 && iD > -1) res.day = '0' + value.substring(iD, iD + 1);
                if (res.month != "" && res.month == '02') {
                    if (res.day > "29" && res.year != "") return false;
                    if (res.year != "" && !this.isLeapYear(res.year) && res.day == "29") return false;
                    if (res.day > "28") return false;
                }
                if (["04", "06", "09", "11", "4", "6", "9", 4, 6, 9, 11].indexOf(res.month) > -1 && ["31", 31].indexOf(res.day) > -1) return false;
                return res;
            }
        }
        return false;
    }

    getDateString(pattern: string = "YYYY/MM/DD", date: any, utc = false) {
        var dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g;
        var timespan: any = {
            YYYY: ['getFullYear', 4],
            YY: ['getFullYear', 2],
            MM: ['getMonth', 2, 1], // getMonth is zero-based, thus the extra increment field
            DD: ['getDate', 2],
            HH: ['getHours', 2],
            mm: ['getMinutes', 2],
            ss: ['getSeconds', 2],
            ms: ['getMilliseconds', 3]
        };
        if (!date) date = new Date();
        return pattern.replace(dateRegex, function (match, key, rest) {
            var args = timespan[key];
            var name = args[0];
            var chars = args[1];
            if (utc === true) name = 'getUTC' + name.slice(3);
            var val = '00' + String(date[name]() + (args[2] || 0));
            return val.slice(-chars) + (rest || '');
        });
    };

    getDayBetween2Date(date1: any, date2: any) {
        if (date1 instanceof Date) { } else {
            if (!this.extracDateStr(date1)) {
                return 'invalid Date 1';
            }
        }
        if (date2 instanceof Date) { } else {
            if (!this.extracDateStr(date2)) {
                return 'invalid Date 2';
            }
        }
        let diffInTime = date2.getTime() - date1.getTime();
        let diffInDays = diffInTime / (1000 * 3600 * 24);
        return diffInDays;
    }

    roundDate(_date: any, end = false) {
        var date: Date = new Date();
        if (_date != null) {
            if (_date instanceof Date) {
                date = _date;
            } else if (typeof _date == 'number') {
                _date = +_date;
                date = new Date(_date);
            } else if (typeof _date == 'string') {
                if (!this.extracDateStr(_date)) {
                    return 'invalid Date 1';
                }
                date = new Date(_date);
            }
        }

        date = new Date(date.setHours(0, 0, 0, 0));
        if (end) {
            date = new Date(date.setDate(date.getDate() + 1));
            date = new Date(date.setTime(date.getTime() - 1000));
        }
        return date;
    }

    formatValueChange(value: string) {
        let pd = ['((?:19|20)[0-9]{2,2})', '(0[1-9]|1[012])', '(0[1-9]|[12][0-9]|3[01])', '[/]'];
        if (new RegExp((['^', pd[0], pd[1], pd[2], '$'].join(""))).test(value)) {
            return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');
        }
        if (new RegExp((['^', pd[0], pd[3], pd[1], pd[2], '$'].join(""))).test(value)) {
            return value.replace(/(\d{4}\/)(\d{2})(\d{2})/g, '$1$2/$3');
        }
        if (new RegExp((['^', pd[0], pd[1], pd[3], pd[2], '$'].join(""))).test(value)) {
            return value.replace(/(\d{4})(\d{2}\/)(\d{2})/g, '$1/$2$3');
        }
    }

    addMonths(dateOrString: any, monthAdd: number, toString = false) {
        var date = new Date();
        if (dateOrString != null) {
            if (dateOrString instanceof Date) {
                date = dateOrString;
            } else if (typeof dateOrString == "number") {
                date = new Date(dateOrString);
            } else if (typeof dateOrString == "string") {
                if (!this.extracDateStr(dateOrString)) {
                    return 'invalid Date';
                }
                date = new Date(dateOrString);
            }
        }
        date.setMonth(date.getMonth() + monthAdd);
        if (toString) {
            var formattedDate = date.toISOString().slice(0, 10);
            var yyyy = formattedDate.substring(0, 4);
            var mm = formattedDate.substring(5, 7);
            var dd = formattedDate.substring(8, 10);
            var stNextYearMonthDay = yyyy + "/" + mm + "/" + dd;
            return stNextYearMonthDay;
        }

        return date;
    }

    countDayNotSunday(dateStart: Date, dateEnd: Date) {
        let countDayOfWork = 0;
        let date = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
        for (let item = date; date <= dateEnd;) {
            if (item.getDay() != 0) {
                countDayOfWork++;
            }
            item.setTime(item.getTime() + 1000 * 60 * 60 * 24);
        }
        return countDayOfWork;
    }


    getDaysInMonth(dateOrString: any) {
        var date = new Date();
        if (dateOrString) {
            if (dateOrString instanceof Date) {
                date = dateOrString;
            } else if (typeof dateOrString == "number") {
                date = new Date(dateOrString);
            } else if (typeof dateOrString == "string") {
                if (!this.extracDateStr(dateOrString)) {
                    return 'invalid Date';
                }
                date = new Date(dateOrString);
            }
        }
        else {
            date = new Date();
        }
        var month = date.getMonth();
        return [31, (this.isLeapYear(date) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    };

    isLeapYear(year: any) {
        if (isNaN(Number(year))) {
            throw 'not year !';
        }

        return (((+year % 4 === 0) && (+year % 100 !== 0)) || (+year % 400 === 0));
    }

    getUTCDate() {
        let date = new Date()
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate(), hour: date.getUTCHours(), minute: date.getUTCMinutes(), second: date.getUTCSeconds() }
    }

    dateStrFormat(date: string, pattern = "mm/dd") {
        if (this.patternDate.indexOf(pattern.toUpperCase()) == -1) {
            throw 'dont suport this pattern !';
        }
        if (date == null || date == "") {
            throw 'Input is Empty !';
        };
        pattern = pattern.toLowerCase();
        let extractDate = this.extracDateStr(date);
        if (extractDate) {
            let dateFm = pattern;
            dateFm = dateFm.replace('yyyy', extractDate.year);
            dateFm = dateFm.replace('mm', extractDate.month);
            dateFm = dateFm.replace('dd', extractDate.day);
            dateFm = dateFm.replace('hh', extractDate.hour);
            dateFm = dateFm.replace('mi', extractDate.minute);
            dateFm = dateFm.replace('ss', extractDate.second)
            return dateFm;
        } else {
            throw 'Invalid pattert !';
        }
    }
}