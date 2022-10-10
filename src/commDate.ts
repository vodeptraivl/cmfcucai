export class CommonFuncDate{
    isDateWithFormat(value: string, pattern = "YYYY/MM/DD") {
        let pd = ['((?:19|20)[0-9]{2,2})', '(0[1-9]|1[012])', '(0[1-9]|[12][0-9]|3[01])', '[/]', '[-]', '[.]'];
        if (value != null && value != "") {
            switch (pattern) {
                case "YYYY/MM/DD":
                    return (new RegExp(['^', pd[0], pd[3], pd[1], pd[3], pd[2], '$'].join("")).test(value));
                case "YYYY.MM.DD":
                    return (new RegExp(['^', pd[0], pd[5], pd[1], pd[5], pd[2], '$'].join("")).test(value));
                case "DD/MM/YYYY":
                    return (new RegExp(['^', pd[1], pd[3], pd[2], pd[3], pd[0], '$'].join("")).test(value));
                case "MM/DD/YYYY":
                    return (new RegExp(['^', pd[2], pd[3], pd[1], pd[3], pd[0], '$'].join("")).test(value));
                case "YYYYMMDD":
                    return (new RegExp(['^', pd[0], pd[1], pd[2], '$'].join("")).test(value));
                case "DDMMYYYY":
                    return (new RegExp(['^', pd[1], pd[2], pd[0], '$'].join("")).test(value));
                case "MMDDYYYY":
                    return (new RegExp(['^', pd[2], pd[1], pd[0], '$'].join("")).test(value));
                case "YYYY-MM-DD":
                    return (new RegExp(['^', pd[0], pd[4], pd[1], pd[4], pd[2], '$'].join("")).test(value));
                case "DD-MM-YYYY":
                    return (new RegExp(['^', pd[1], pd[4], pd[2], pd[4], pd[0], '$'].join("")).test(value));
                case "MM-DD-YYYY":
                    return (new RegExp(['^', pd[2], pd[4], pd[1], pd[4], pd[0], '$'].join("")).test(value));
                case "YYYY-MM-DD HH:MM:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g).test(value));
                case "YYYY/MM/DD HH:MM:SS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})[/](0[1-9]|1[012])[/]([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g).test(value));
                case "YYYYMMDDHHMMSS":
                    return (new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$/g).test(value));
            }
        }
        return false
    }
    
    strIsDate(value : string) {
        let pd = ['((?:19|20)[0-9]{2,2})', '(0[1-9]|1[012])', '(0[1-9]|[12][0-9]|3[01])', '[/]', '[-]', '[.]'];
        if (value != null && value != "") {
            if ((new RegExp(['^', pd[0], pd[3], pd[1], pd[3], pd[2], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "YYYY/MM/DD"
                }
            }
            if ((new RegExp(['^', pd[0], pd[5], pd[1], pd[5], pd[2], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "YYYY.MM.DD"
                }
            }
            if ((new RegExp(['^', pd[1], pd[3], pd[2], pd[3], pd[0], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "DD/MM/YYYY"
                }
            }
            if ((new RegExp(['^', pd[2], pd[3], pd[1], pd[3], pd[0], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "MM/DD/YYYY"
                }
            }
            if ((new RegExp(['^', pd[0], pd[1], pd[2], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "YYYYMMDD"
                }
            }
            if ((new RegExp(['^', pd[1], pd[2], pd[0], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "DDMMYYYY"
                }
            }
            if ((new RegExp(['^', pd[2], pd[1], pd[0], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "MMDDYYYY"
                }
            }
            if ((new RegExp(['^', pd[0], pd[4], pd[1], pd[4], pd[2], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "YYYY-MM-DD"
                }
            }
            if ((new RegExp(['^', pd[2], pd[4], pd[1], pd[4], pd[0], '$'].join("")).test(value))) {
                return {
                    date: true,
                    format: "MM-DD-YYYY"
                }
            }
            if ((new RegExp(/^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g).test(value))) {
                return {
                    date: true,
                    format: "YYYY-MM-DD HH:MM:SS"
                }
            }
            if ((new RegExp(/^(19[0-9]{2}|2[0-9]{3})[/](0[1-9]|1[012])[/]([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g).test(value))) {
                return {
                    date: true,
                    format: "YYYY/MM/DD HH:MM:SS"
                }
            }
            if ((new RegExp(/^(19[0-9]{2}|2[0-9]{3})(0[1-9]|1[012])([123]0|[012][1-9]|31)([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])$/g).test(value))) {
                return {
                    date: true,
                    format: "YYYYMMDDHHMMSS"
                }
            }
        }
        return false;
    }
    
    getDateString (pattern: string = "YYYY/MM/DD", date : any, utc = false) {
        var dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g;
        var timespan : any = {
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
          return pattern.replace(dateRegex, function(match, key, rest) {
            var args = timespan[key];
            var name = args[0];
            var chars = args[1];
            if (utc === true) name = 'getUTC' + name.slice(3);
            var val = '00' + String(date[name]() + (args[2] || 0));
            return val.slice(-chars) + (rest || '');
          });
    };
    
    getDayBetween2Date(date1 : any, date2 : any) {
        if (date1 instanceof Date) {} else {
            if (!this.strIsDate(date1)) {
                return 'invalid Date 1';
            }
        }
        if (date2 instanceof Date) {} else {
            if (!this.strIsDate(date2)) {
                return 'invalid Date 2';
            }
        }
        let diffInTime = date2.getTime() - date1.getTime();
        let diffInDays = diffInTime / (1000 * 3600 * 24);
        return diffInDays;
    }
    
    roundDate(_date : any, end = false) {
        var date : Date =  new Date();
        if(_date != null){
            if (_date instanceof Date) {
                date = _date;
            } else if (typeof _date == 'number') {
                _date = +_date;
                date = new Date(_date);
            } else if (typeof _date == 'string') {
                if (!this.strIsDate(_date)) {
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
    
    formatValueChange(value : string) {
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
    
    addMonths(dateOrString : any,monthAdd : number,toString = false) {
        var date = new Date();
        if(dateOrString != null){
            if (dateOrString instanceof Date) {
                date = dateOrString;
            } else if (typeof dateOrString == "number") {
                date = new Date(dateOrString);
            } else if (typeof dateOrString == "string") {
                if (!this.strIsDate(dateOrString)) {
                    return 'invalid Date';
                }
                date = new Date(dateOrString);
            }
        }
        date.setMonth(date.getMonth() + monthAdd);
        if(toString){
            var formattedDate = date.toISOString().slice(0, 10);
            var yyyy = formattedDate.substring(0, 4);
            var mm = formattedDate.substring(5, 7);
            var dd = formattedDate.substring(8, 10);
            var stNextYearMonthDay = yyyy + "/" + mm + "/" + dd;
            return stNextYearMonthDay;
        }
        
        return date;
    }
    
    countDayNotSunday(dateStart:Date, dateEnd:Date){
        let countDayOfWork = 0;
        let date = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
        for(let item = date ; date<= dateEnd;){
            if (item.getDay() != 0){
                countDayOfWork++;
            }
            item.setTime(item.getTime() + 1000*60*60*24);
        }
        return countDayOfWork;
    }
    
    
    getDaysInMonth(dateOrString : any) {
        var date = new Date();
        if(dateOrString){
            if (dateOrString instanceof Date) {
                date = dateOrString;
            } else if (typeof dateOrString == "number") {
                date = new Date(dateOrString);
            } else if (typeof  dateOrString == "string") {
                if (!this.strIsDate(dateOrString)) {
                    return 'invalid Date';
                }
                date = new Date(dateOrString);
            }
        }
        else{
            date = new Date();
        }
        var month = date.getMonth();
        return [31, (this.isLeapYear(date) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    };
    
    isLeapYear(dateOrString : Date) {
        var date = new Date();
        if(dateOrString){
            if (dateOrString instanceof Date) {
                date = dateOrString;
            } else if (typeof dateOrString == "number") {
                date = new Date(dateOrString);
            } else if (typeof dateOrString == "string") {
                if (!this.strIsDate(dateOrString)) {
                    return 'invalid Date';
                }
                date = new Date(dateOrString);
            }
        }
        else{
            date = new Date();
        }
        var year = date.getFullYear();
        return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
    }

    getUTCDate(){
        let date = new Date()
        return {year:date.getUTCFullYear(),month:date.getUTCMonth()+1,day:date.getUTCDate(),hour:date.getUTCHours(),minute : date.getUTCMinutes(),second:date.getUTCSeconds()}
    }
}