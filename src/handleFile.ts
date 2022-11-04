// import { Observable, Subject } from "rxjs";

import { CommonFunc } from ".";
declare var Promise: any;
interface optionsExportCSV {
	headerName: string;
	columnName: string
}
class splitFileB64 {
	uuid: string = "";
	originalFileName: string = "";
	fileSize: number = 10 * 1024 * 1024;
	fileB64: string = "";
	fileSlice: any;
}

export class HandleFile {
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

	saveFile(fileName: string, data: string, type: string) {
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

	svgToFile(svg: any, fileName = "unamed.png", callBack = () => { }) {
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

	MB_SPLIT = 1024 * 1024 * 10;

	async sliceFile(file: File | any, splitUnit: number = 10) {
		const chunkSize = 1024 * 1024 * splitUnit;
		const fileSize = file.size;
		const totalChunks = Math.ceil(fileSize / chunkSize);
		let currentChunk = 1;
		const listFileData: splitFileB64[] = [];
		while (currentChunk <= totalChunks) {
			const offset = (currentChunk - 1) * chunkSize;
			currentChunk++;
			let newSpB64: splitFileB64 = new splitFileB64();
			newSpB64.uuid = CommonFunc.smallUUID();
			newSpB64.fileSize = chunkSize;
			newSpB64.originalFileName = file.name;
			newSpB64.fileSlice = file.slice(offset, offset + chunkSize, file.type);
			let fileB64 = await this.file2Base64(
				newSpB64.fileSlice
			)
			newSpB64.fileB64 = fileB64;
			listFileData.push(newSpB64);
		}

		return listFileData;
	}

	async file2Base64(file: Blob | File): Promise<any> {
		const reader = new FileReader();
		return new Promise((resolve :any, reject:any) => {
			reader.onloadend = () => {
				resolve(
					(reader.result as string).substr(
						(reader.result as string).indexOf(",") + 1
					)
				);
			};
			reader.onerror = error => reject(error);
			reader.readAsDataURL(file);
		});
	}
}