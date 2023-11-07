import { useCallback, useEffect, useRef, useState } from 'react';

const UpLoader = () => {
    const File = useRef(null); //单选文件
    const Files = useRef(null); //文件夹
    const DragArea = useRef(null); //拖拽区域
    const [file, setFile] = useState<HTMLInputElement | null>(File.current!); //上传的文件input dom
    const [files, setFiles] = useState<HTMLInputElement | null>(Files.current!); //上传的文件夹input dom
    const [waitingFiles, setWaitingFiles] = useState<Array<File>>([]); //待上传的所有文件
    const waitingFilesRef = useRef<Array<File>>([]); //缓冲区
    const [dragArea, setDragArea] = useState({
        ondragenter,
        ondragover,
        ondrop,
    }); //拖拽区事件

    useEffect(() => {
        setFile(File.current);
        setFiles(Files.current);
        setDragArea(DragFunc());
    }, []); //初始化参数，拿到ref

    useEffect(() => {
        console.log(waitingFiles);
    }, [waitingFiles]);

    const DragFunc = useCallback(() => {
        return {
            //鼠标拖拽进入事件
            ondragenter: (e: DragEvent) => {
                e.preventDefault();
            },
            //鼠标拖拽移动事件
            ondragover: (e: DragEvent) => {
                e.preventDefault();
            },
            //鼠标拖拽放下事件
            ondrop: (e: DragEvent) => {
                e.preventDefault();
                // console.log(e.dataTransfer?.items.length) //放下的文件数
                const entryRead = (isEntry: any) => {
                    // 判断是否为文件还是目录
                    if (isEntry?.isDirectory) {
                        //目录
                        //创建一个目录读取器
                        const reader = isEntry.createReader();
                        //该对象的readEntries方法能异步读取目录下所有东西并在回调里返回
                        reader.readEntries((entry: any) => {
                            for (let item of entry) {
                                entryRead(item);
                            }
                        });
                    } else {
                        //文件
                        isEntry?.file((f: File) => {
                            //拿到拖拽文件的file对象
                            waitingFilesRef.current.push(f);
                            setWaitingFiles([...waitingFilesRef.current]);
                        });
                    }
                };
                //e.dataTransfer.items可拿到拖拽了哪些东西
                for (let item of e.dataTransfer?.items!) {
                    //item.webkitGetAsEntry()可以得到文件的详细entry对象 类似文件的钥匙
                    const entry = item.webkitGetAsEntry();
                    entryRead(entry);
                }
            },
        };
    }, []);

    const onChange = (e: any) => {
        console.log(e.target.files);
        setWaitingFiles([...waitingFiles, ...e.target.files]);
    };

    return (
        <div className="lanui-uploader">
            <div
                className="drag-area"
                onDragEnter={dragArea?.ondragenter!}
                onDragOver={dragArea?.ondragover!}
                onDrop={dragArea?.ondrop!}
                ref={DragArea}
            ></div>
            <input type="file" multiple ref={File} onChange={onChange} />
            <input
                type="file"
                multiple
                webkitdirectory="true"
                mozdirectory="true"
                odirectory="true"
                ref={Files}
                onChange={onChange}
            />
        </div>
    );
};

export default UpLoader;
