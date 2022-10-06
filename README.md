## Giới Thiệu

Tổng hợp từ những hàm củ cải của anh em

## Cài đặt

```shell
$ npm install cmfcucai@latest
```

## Import vào sử dụng

```typescript
Sau khi cài đặt thì import vào như phía dưới

import { 
    CommonFunc,
    CommonDate,
    CommonFile 
    } from 'cmfcucai';

Gồm có 3 module chính.

```

### CommonFunc
```javascript
Module những hàm hay dùng.

setSelectionRange,
checkDouble,
formatDecimal,
compare2Object,
getByteLength,
UUIDV4,
smallUUID,
emailValidate,
createUrlQuery,
replaceAll
```
### CommonDate
```javascript
Module những hàm hay dùng cho Date.

getDateString,
isLeapYear,
getDaysInMonth,
countDayNotSunday,
addMonths,
formatValueChange,
roundDate,
getDayBetween2Date,
isDateWithFormat
```
### CommonCookie
```javascript
Module những hàm hay dùng cho Cookie.

deleteCookie,
delAllCookie,
getcookie,
setCookie
```
### CommonFile

```javascript
Module những hàm hay dùng cho File.

arrayDataToTxt, -> xuất file text
base64ToBlob,
dataToCSV -> xuất file CSV
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
```
update late


## Sometime can help you, maybe