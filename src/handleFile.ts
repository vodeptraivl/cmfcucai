// import { Observable, Subject } from "rxjs";

interface optionsExportCSV {
    headerName: string;
    columnName: string
}
// class UploadFileModel  {
//     isSuccess : boolean = true;
//     errorCode: string = "";
//     tip: string = "";
//     uuid: string = "";
//     originalFileName: string = "";
//     fileSize: number = 0;
// }
// class uploadDomain {
//     offset : number = 0;
// 	currentChunk : number = 0;
//     indexFile : number = 0;
//     status : string = "waiting";
//     isSuccess : Subject<boolean> = new Subject<boolean>();
//     isSubcribe : boolean = false;
// }
// class modelUploadList {
//     uploads : uploadDomain[] = [];
// }

// class UploadFileRequest {
//     uuid: string
//     index: number
//     fileDataList: Array<String>
//     constructor(uuid: string, index: number, listFileData: Array<String>) {
//         this.uuid = uuid
//         this.index = index
//         this.fileDataList = listFileData
//     }
// }

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

    saveFile(fileName:string, data:string, type:string) {
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

    async createListBase64(file: File | Blob, splitUnit: number) {
		
		// ループ数の計算
		const chunkSize = 1024 * 1024 * splitUnit;
		const fileSize = file.size;
		const totalChunks = Math.ceil(fileSize / chunkSize);
		let currentChunk = 1;

		// ループ数でループし、分担単位でデータを取得して暗号化する
		const listFileData = new Array<string>();
		while (currentChunk <= totalChunks) {
			const offset = (currentChunk - 1) * chunkSize;
			currentChunk++;

			listFileData.push(
				await this.encodeBase64(
					file.slice(offset, offset + chunkSize, file.type)
				)
			);
		}

		return listFileData;
	}

	async encodeBase64(file: Blob | File): Promise<any> {
		const reader = new FileReader();
		return new Promise((resolve, reject) => {
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
    // SUCCESS_CODE = 200;
	// MB_SPLIT = 1024 * 1024 * 10; // 10mb
	// TIME_OUT = 30000; //30s
    // isLastPrt : Subject<boolean> = new Subject<boolean>();
	// offset = 0;
	// isPause : boolean = false;
	// currentChunk = 1;
	// indexFile = 1;
	// totalChunks = 0;
	// fileUpload : any;
	// fileUploadRequest : any ;
	// isSaveFile : boolean = false;
	// uploadFileItem : any;
	// obserUpload : Observable<UploadFileModel> = new Observable<UploadFileModel>();
	// totalProgressUploadFile : Subject<any> = new Subject<any>() ;
	// currentPercent = 0;
	// httpRequest : any = null;
	// listModelFile : modelUploadList = new modelUploadList;
	// isSubcribe : any = null;
	// isSuccess : Subject<any> = new Subject<any>() ;
	// loopIndex = 1;
	// dialogAlerts: any[] = [
	// 	{
	// 		type: "",
	// 		msg: ``,
	// 		timeout: 5000
	// 	}
	// ];
    //vola
	// public onUploadFile = (): Observable<UploadFileModel> => {
	// 	return new Observable<UploadFileModel>(observer  => {
	// 		(async () => {
	// 			while (this.loopIndex <= this.totalChunks) {

	// 				if(this.isPause){
	// 					observer.unsubscribe();
	// 					return;
	// 				}else{

	// 					let indexItem = this.listModelFile.uploads.findIndex(x => x.offset == this.offset && x.indexFile == this.indexFile && x.currentChunk == this.currentChunk);
						
	// 					if(this.listModelFile.uploads[indexItem].status !== "waiting"){
	// 						if((indexItem-1) > -1){
	// 							this.listModelFile.uploads[indexItem-1].isSuccess.unsubscribe();
	// 						}
	// 						observer.unsubscribe();
	// 						return;
	// 					}
	// 					if((this.listModelFile.uploads.length - 1) == indexItem){
	// 						this.isLastPrt.next(true);
	// 					}
	// 					this.listModelFile.uploads[indexItem].status = "pending";
	// 					// ファイルのデータのアップロード
	// 					const offset = this.offset * this.MB_SPLIT;
	// 					let listFileData = await this.createListBase64(
	// 						this.fileUpload.slice(offset, offset + this.MB_SPLIT, this.fileUpload.type),
	// 						this.fileUploadRequest.splitUnit
	// 					);
		
	// 					// ファイルのアップロードのAPIを呼び出す
	// 					const uploadItem = new UploadFileRequest(
	// 						this.fileUploadRequest.uuid,
	// 						this.indexFile,
	// 						listFileData
	// 					);

	// 					this.httpRequest = null;//await this.uploadSplitFile(uploadItem);
		
	// 					//statusCd!=200の場合、処理を中断し
	// 					if (
	// 						this.httpRequest &&
	// 						this.httpRequest.statusCode != this.SUCCESS_CODE
	// 					) {
	// 						this.uploadFileItem.isSuccess = false;
	// 						this.uploadFileItem.errorCode = this.httpRequest.errorCode;
	// 						this.uploadFileItem.tip = this.httpRequest.tip ? this.httpRequest.tip : (this.httpRequest as any).message;
	// 						this.listModelFile.uploads[indexItem].status = "error";
	// 						throw observer.error(this.uploadFileItem);
	// 					}

	// 					this.listModelFile.uploads[indexItem].status = "done";
	// 					this.listModelFile.uploads[indexItem].isSuccess.next(true);
	// 					this.currentPercent = Math.round(this.currentChunk/this.totalChunks * 100);

	// 					if(!this.isPause){
	// 						this.totalProgressUploadFile.next(this.currentPercent) ;
	// 					}
	// 					if(this.currentPercent < 100){
	// 						this.offset++;
	// 						this.currentChunk++;
	// 						this.indexFile++;
	// 					}
						
	// 					this.loopIndex++;
	// 				}
					
	// 			}

	// 			if(this.isPause){
	// 				observer.unsubscribe();
	// 				return;
	// 			}
		
	// 			// 保存ファイル情報(uploadFileModel)の作成
	// 			this.uploadFileItem.uuid = this.fileUploadRequest.uuid;
	// 			this.uploadFileItem.originalFileName = this.fileUpload.name;
	// 			this.uploadFileItem.fileSize = this.fileUpload.size;
				
	// 			// 添付ファイルの保存
	// 			// isSaveFile=falseの時、処理を中断し
	// 			if (!this.isSaveFile) {
	// 				observer.next(this.uploadFileItem);
	// 				observer.complete();
		
	// 				return;
	// 			}
		
	// 			// 添付ファイルの保存のAPIを呼び出す
	// 			// 成功の場合、作成したuploadFileModelを編集し、返す
	// 			const arrayUploadFile = Array<UploadFileModel>();
	// 			arrayUploadFile.push(this.uploadFileItem);
	// 			// this.saveFile(arrayUploadFile).subscribe(
	// 			// 	value => {
	// 			// 		this.uploadFileItem.isSuccess = value.isSuccess;
	// 			// 		this.uploadFileItem.tip = value.tip ? value.tip : (value as any).message;
	// 			// 		this.uploadFileItem.errorCode = value.errorCode;
		
	// 			// 		observer.next(this.uploadFileItem);
	// 			// 		this.isSuccess.next(this.uploadFileItem);
	// 			// 	},
	// 			// 	error => {
	// 			// 		this.uploadFileItem.isSuccess = false;
	// 			// 		this.uploadFileItem.tip = error.tip ? error.tip : (error as any).message;
	// 			// 		this.uploadFileItem.errorCode = error.errorCode;
		
	// 			// 		throw observer.error(this.uploadFileItem);
	// 			// 	},
	// 			// 	() => {
	// 			// 		observer.next(this.uploadFileItem);
	// 			// 		this.isSuccess.next(this.uploadFileItem);
	// 			// 		observer.complete();
	// 			// 	}
	// 			// );

	// 		})().catch(error => {
	// 			observer.error(error);
	// 			observer.complete();
	// 		});
	// 	});
	// };
}