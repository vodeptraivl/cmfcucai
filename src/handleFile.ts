interface optionsExportCSV {
    headerName: string;
    columnName: string
}
export class HandleFile {
    //options = [{headerName : '' , columnName : ''}]
    dataToCSV(dataListObj: any, options: optionsExportCSV[], fileName = 'myCSV.csv') {

        if (dataListObj != null && options != null) {
            let csvContent = "data:text/csv;charset=utf-8,";
            let dataRow = '"' + [options.map(x => x.headerName)].join('","') + '"\r\n';
            for (let i = 0; i < dataListObj.length; i++) {
                let row = "";
                for (let j = 0; j < options.length; j++) {
                    row += dataListObj[i][options[j].columnName];
                }
                row += '"\r\n';
            }
            if (navigator["msSaveOrOpenBlob"]) {
                var blob = new Blob([dataRow], { type: "text/csv;charset=utf-8;" });
                navigator["msSaveOrOpenBlob"](blob, fileName);
            } else {
                csvContent += dataRow;
                var encodedUri = encodeURI(csvContent);
                var link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
            }
        }

    }

    base64ToBlob(base64: string, mime: string) {
        var bin = atob(base64.replace(/^.*,/, ''));
        var buffer = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        try {
            var blob = new Blob([buffer.buffer], {
                type: mime
            });
        } catch (e) {
            return false;
        }
        return blob;
    }


    arrayDataToTxt(_arrayData: string[], fileName = 'text.txt') {
        let content = "data:text/plain;charset=utf-8,";
        let dataRow = _arrayData.join('\r\n');
        if (navigator["msSaveOrOpenBlob"]) {
            var blob = new Blob([dataRow], {
                type: "text/plain;charset=utf-8;"
            });
            navigator["msSaveOrOpenBlob"](blob, fileName);
        } else {
            content += dataRow;
            var encodedUri = encodeURI(content);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
        }
    }

}