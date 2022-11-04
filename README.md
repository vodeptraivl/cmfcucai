## Intro

hmmm ..... 

## Setup

```shell
$ npm install cmfcucai@latest
```

## Import

```typescript

import { 
    CommonFunc,
    CommonDate,
    CommonFile 
    } from 'cmfcucai';

```

### CommonFunc
```javascript
deleteCookie,
delAllCookie,
getcookie,
setCookie
setSelectionRange (input , selectionStart: number, selectionEnd: number)
        => select range of input from "selectionStart" to selectionEnd

checkDouble (valueCheck: string)
        => check vallueString is Double

formatDecimal,
compare2Object,
getByteLength(value: string) : number
        => return byte lengh of value

UUIDV4
        => generate uuid with pattern "'xxxVxxxxx-xxOxx-Lxxx-Axxx-xxxVxxxxxxxxLx'"

smallUUID
        => generate uuid with pattern "'xxxvxxxlxx'"

emailValidate(email: string) : boolean
        => check email vailid or not

createUrlQuery(data: Object)
        => convert Object to Param URL EXP {a : 1, b : 2} = > ?a=1&b=2

replaceAll(value: string, search: string, replaceWith: string) 
        => replace all search String to "replaceWith"
OTP(secret_key: string, otp_valid_for_secs = 30, date = new Date(), lengthToken = 6)
        => generate One Time Password from serect key with each "otp_valid_for_secs" seconds

checkOTP(otp: any, secret_key: any, otp_valid_for_secs = 30, date = new Date(), lengthToken = 6)
        => check OTP generate from serect key by each "otp_valid_for_secs" second

extractUniqueKey(data : object[],key : string,join = null)
        => input : data = [
                {a:1 , b:2 , c: 3},
                {a:1 , b:2 , c: 3},
                ...
        ]
        key = 'c'
        return [3,3]
        if join is not null 
                join = ','
                return '3,3'
uniqueStrArr(data : string[])
        => input = ['1','2','3','1'] return ['1','2','3']
```
### CommonDate
```javascript

getDateString,
isLeapYear(dateOrString : Date)
        => check is leap year
           if dateOrString is null date return is current date

getDaysInMonth(dateOrString : any)
        => return all day in dateOrString
           if dateOrString is null date return is current date

countDayNotSunday(dateStart:Date, dateEnd:Date)
        => return count day from "dateStart" to "dateEnd" with not sunday count

addMonths(dateOrString : any,monthAdd : number,toString = false) 
        => add month from param "monthAdd"
           if dateOrString is null date return is current date
           if toString = true will return Date else return string with pattern "YYYY/MM/DD"

formatValueChange,
roundDate(_date : any, end = false)
        => round date to start of date
           if _date is null date return is current date
           if end == true will return round end of date
getDayBetween2Date,
isDateWithFormat(value: string, pattern = "YYYY/MM/DD"): boolean
        => check value is date with pattern default is "YYYY/MM/DD"

getUTCDate
        => return {year,month,day,hour,minute,second} with UTC Time Zone

extracDateStr(value)
        will return below
        => exp : value = "01/12" = {
                date : true,
                format : 'DD/MM',
                year:'',
                month:'01',
                day:'12',
                hour:'',
                minute:'',
                second:''
        }
dateStrFormat(date: string, pattern = "mm/dd") 
        will return date format with pattern;
        => date = "20221212" return "12/12";
```
### CommonFile

```javascript
Module common for File.

arrayDataToTxt, -> export file text
base64ToBlob,
dataToCSV -> export file CSV
svgToFile, -> SVGElement to file png
svgToPng, -> SVGElement to file svg
```
```javascript
arrayDataToTxt => export array data to file txt
        parameter : (_arrayData, fileName = "text.txt") 
        _arrayData exp : ["row1","row2",...]
        fileName default is "text.txt"

base64ToBlob => convert base64 string to blob

dataToCSV => export object data to file csv
        parameter : (dataListObj,options,fileName = 'myCSV.csv') 
        options exp : [{headerName : '' , columnName : ''}]
        fileName default is "myCSV.csv"

svgToPng => export SVGElement to file png
        (svg: SVGElement, fileName = "unamed.png", callBack = () => { })
        svg = document.querySelector("svg") or  @ViewChild("", { static true }) svg!: HTMLElement
        fileName default is "unamed.png"

svgToFile => export SVGElement to file svg
        (svg: any, fileName = "unamed.svg", callBack = () => { })
        svg = document.querySelector("svg") or  @ViewChild("", { static true }) svg!: HTMLElement
        fileName default is "unamed.svg"


sliceFile(file: File | any , splitUnit: number = 10)
        =>
        slice file to multiple package with 10mb by default
        return Array of {
                         uuid: string;
                         originalFileName: string;
                         fileSize: number;
                         fileB64: string;
                         fileSlice : Blob;
                        }
file2Base64(file: Blob | File)
        => convert file to base64 string
```
update late


## Sometime can help you, maybe