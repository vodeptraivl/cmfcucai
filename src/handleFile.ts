interface optionsExportCSV {
    headerName: string;
    columnName: string
}
export class HandleFile {
    //options = [{headerName : '' , columnName : ''}]
    dataToCSV(dataListObj: any, options: optionsExportCSV[], fileName = 'myCSV.csv') {
        if (dataListObj != null && options != null) {
            let dataRow = '"' + [options.map(x => x.headerName)].join('","') + '"\r\n';
            for (let i = 0; i < dataListObj.length; i++) {
                let row = "";
                for (let j = 0; j < options.length; j++) {
                    row += dataListObj[i][options[j].columnName];
                }
                row += '"\r\n';
            }
            this.saveFile(fileName, dataRow, "data:text/csv;charset=utf-8,")
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
        let dataRow = _arrayData.join('\r\n');
        this.saveFile(fileName, dataRow, "data:text/plain;charset=utf-8,")
    }

    saveFile(fileName, data, type) {
        if (navigator["msSaveOrOpenBlob"]) {
            var blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
            navigator["msSaveOrOpenBlob"](blob, fileName);
        } else {
            type += data;
            var encodedUri = encodeURI(type);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
        }
    }

    svgToPng(svg: any, fileName = "unamed.png", callBack = () => { }) {
        if (svg == null) {
            throw "SVG is NULL !!";
        };
        if (svg.nativeElement != null) {
            svg = svg.nativeElement;
        }
        let img = new Image(), serializer = new XMLSerializer(),
            svgStr = serializer.serializeToString(svg),
            data = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgStr)))
        var canvas = document.createElement("canvas");
        let w = svg.clientWidth;
        let h = svg.clientHeight;
        canvas.width = w;
        canvas.height = h;
        var context2d = canvas.getContext("2d");
        img.src = data;
        img.onload = () => {
            context2d?.drawImage(img, 0, 0, w, h);
            var canvasdata = canvas.toDataURL("image/png");
            this.saveFile(fileName, canvasdata, "");
            if (callBack) {
                callBack();
            }
        };
    }

    svgToFile(svg: any, fileName = "unamed.svg", callBack = () => { }) {
        if (svg == null) {
            throw "SVG is NULL !!";
        };
        if (svg.nativeElement != null) {
            svg = svg.nativeElement;
        }
        let serializer = new XMLSerializer(),
            svgStr = serializer.serializeToString(svg),
            data = window.btoa(unescape(encodeURIComponent(svgStr)))
        this.saveFile(fileName, data, 'data:image/svg+xml;base64,');
        if (callBack) {
            callBack();
        }
    }

    svgDataURL(svg: any) {
        var svgAsXML = (new XMLSerializer).serializeToString(svg);
        return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    }

    uploadFileLarge(){

    }

}