import React from 'react';
import {
    DragEventHandler,
    SyntheticEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

const UpLoader = () => {
    const File = useRef(null); //单选文件
    const Files = useRef(null); //文件夹
    const DragArea = useRef(null); //拖拽区域
    const [file, setFile] = useState<HTMLInputElement | null>(File.current!); //上传的文件input dom
    const [files, setFiles] = useState<HTMLInputElement | null>(Files.current!); //上传的文件夹input dom
    const [waitingFiles, setWaitingFiles] = useState<Array<File>>([]); //待上传的所有文件
    const [waitingFilesElements, setwaitingFilesElements] = useState<
        Array<HTMLDivElement>
    >([]);
    const waitingFilesRef = useRef<Array<File>>([]); //缓冲区
    const key = useRef(0); //key作为展示文件的唯一索引值
    const itemRefs = useRef<any>([]);
    const [dragArea, setDragArea] = useState({
        ondragenter,
        ondragover,
        ondrop,
    }); //拖拽区事件

    //初始化参数，拿到ref
    useEffect(() => {
        setFile(File.current);
        setFiles(Files.current);
        setDragArea(DragFunc());
    }, []);

    //将拿到的待上传文件加入展示
    useEffect(() => {
        console.log('waitingFiles', waitingFiles);

        if (waitingFiles.length > 0) {
            setwaitingFilesElements([
                ...waitingFilesElements,
                ...waitingFiles.map((item: File, index: number) => {
                    //赋予每个节点ref
                    itemRefs.current[index] =
                        itemRefs.current[index] || React.createRef();
                    return (
                        <div
                            className="item"
                            key={key.current++}
                            ref={itemRefs.current[index]}
                        >
                            <div className="items">{item.name}</div>
                            <div className="items">{item.type}</div>
                            <div className="items">{item.size + 'KB'}</div>
                            <div className="items">{'pending'}</div>
                            <div className="items" onClick={removeTask}>
                                {'删除'}
                            </div>
                        </div>
                    ) as unknown as HTMLDivElement;
                }),
            ]);
        }

        console.log(itemRefs.current);
    }, [waitingFiles]);

    //加入展示后清空拿到的文件以及缓冲区
    useEffect(() => {
        console.log('waitingFilesElements', waitingFilesElements);
        if (waitingFiles.length > 0) {
            setWaitingFiles([]);
            waitingFilesRef.current = [];
        }
    }, [waitingFilesElements]);

    //拖拽区域事件
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

    //文件夹加载事件
    const onChange = (e: SyntheticEvent) => {
        const element = e.target as HTMLInputElement;
        //将选取的文件添加至待上传文件列
        setWaitingFiles([...waitingFiles, ...element.files!]);
    };

    //button按钮进入事件
    const onMouseEnter = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
        const elment = e.target as HTMLDivElement;

        if (elment.children.length > 0) {
            elment.className = 'upload-button-hover';
            elment.children[0].className = 'hidden-input';
        }
    };
    const onMouseEnterNormal = (e: SyntheticEvent) => {
        const elment = e.target as HTMLDivElement;

        elment.className = 'upload-button-hover';
    };

    //button按钮离开事件
    const onMouseLeave = (e: SyntheticEvent) => {
        const elment = e.target as HTMLInputElement;

        elment.className = 'hidden-input';
        const parent = elment.parentNode! as HTMLDivElement;
        parent.className = 'upload-button-default';
    };
    const onMouseLeaveNormal = (e: SyntheticEvent) => {
        const elment = e.target as HTMLDivElement;

        elment.className = 'upload-button-default';
    };

    //点击移除任务
    const removeTask = (e: SyntheticEvent) => {
        const elment = e.target as HTMLDivElement;
        const parent = elment.parentNode?.parentNode;
        // console.log(elment);
        parent?.removeChild(elment.parentNode!);
    };

    return (
        <div className="lanui-uploader">
            {/**拖拽区 */}
            <div
                className="drag-area"
                onDragEnter={
                    dragArea?.ondragenter! as unknown as DragEventHandler<HTMLDivElement>
                }
                onDragOver={
                    dragArea?.ondragover! as unknown as DragEventHandler<HTMLDivElement>
                }
                onDrop={
                    dragArea?.ondrop! as unknown as DragEventHandler<HTMLDivElement>
                }
                ref={DragArea}
            >
                <div className="text">可拖入文件+</div>
            </div>
            {/**上传文件按钮区 */}
            <div className="button-area">
                <div
                    className="upload-button-default"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {'选择文件'}
                    <input
                        className="hidden-input"
                        type="file"
                        multiple
                        ref={File}
                        onChange={onChange}
                    />
                </div>
                <div
                    className="upload-button-default"
                    onMouseOver={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {'选择文件夹'}
                    <input
                        className="hidden-input"
                        type="file"
                        multiple
                        webkitdirectory="true"
                        mozdirectory="true"
                        odirectory="true"
                        ref={Files}
                        onChange={onChange}
                    />
                </div>
            </div>
            {/**待上传文件可视化区 */}
            <div className="list-area">
                <div className="title">
                    <div className="item">文件名</div>
                    <div className="item">类型</div>
                    <div className="item">大小</div>
                    <div className="item">状态</div>
                    <div className="item">操作</div>
                </div>
                <div className="list">{...waitingFilesElements}</div>
            </div>
            {/**上传按钮区 */}
            <div className="button-area">
                <div
                    className="upload-button-default"
                    onMouseEnter={onMouseEnterNormal}
                    onMouseLeave={onMouseLeaveNormal}
                >
                    {'开始上传'}
                </div>
            </div>
        </div>
    );
};

export default UpLoader;
