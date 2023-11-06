import { useEffect, useMemo, useRef, useState } from 'react';

//VirtualList参数，此组件子元素为固定高度
export interface VirtualListProps {
    height?: number; //容器高度，默认200px
    width?: number; //容器宽度，默认200px
    childrenHight?: number; //子元素高度，默认40px
    data?: Array<any>; //渲染数据
}

//VirtualList_Dynamic参数，此组件子元素为动态高度
export interface VirtualList_DynamicProps {
    height?: number; //容器高度，默认200px
    width?: number; //容器宽度，默认200px
    data?: Array<any>; //渲染数据
    children?: Object;
}

//Observer_Item的item参数，该参数定义动态高度元素的id（便于索引），src有则渲染图片，value默认为文字内容
interface Observer_Item {
    id?: number;
    src?: string;
    value?: string;
}

//Observer_Item参数，此组件为VirtualList_Dynamic组件的子元素，必须包裹在VirtualList_Dynamic下使用
/**使用方法：
 * <VirtualList_Dynamic data={data}>
        {({ index, item, measure }: Observer_ItemProps) => (
            <Observer_Item
                index={index}
                key={item.id}
                item={item}
                measure={measure}
            >
                <>
                    {item.value}
                    {item.src && <img src={item.src} alt="" />}
                </>
            </Observer_Item>
        )}
    </VirtualList_Dynamic>
*/
export interface Observer_ItemProps {
    index: HTMLDivElement;
    measure: Function;
    item: Observer_Item;
    children?: any;
}

export const VirtualList = ({
    height = 200,
    width = 200,
    childrenHight = 40,
    ...props
}: VirtualListProps) => {
    const { data = [] } = props;
    const viewport = useRef<HTMLDivElement | null>(null); // 可视区域
    const listArea = useRef(null); // 渲染区域
    const phantom = useRef(null); // 占位区域，列表总高度

    // 列表总高度
    const phantomHeight = data.length * childrenHight;
    // 渲染数量
    const viewCount = Math.floor(height / childrenHight) + 5;
    // 开始index
    const [startIndex, setstartIndex] = useState(0);
    // 结束index
    const endIndex = useMemo(() => startIndex + viewCount, [startIndex]);
    // 偏移量
    const [startOffset, setstartOffset] = useState(0);

    // 获取startIndex
    const getStartIndex = (scrollTop: number) => {
        return Math.floor(scrollTop / childrenHight);
    };

    // 获取startOffset
    const getStartOffset = (startIndex: number) => {
        return startIndex * childrenHight;
    };

    // 是否在显示范围之间
    const isBetweenViewRanges = (index: number) => {
        return index >= startIndex && index <= endIndex;
    };

    /**
     * 获取滚动距离 scrollTop
     * 根据 scrollTop 和 itemSize 计算出 startIndex 和 endIndex
     * 根据 scrollTop 和 itemSize 计算出 startOffset
     * 显示startIndex 和 endIndex之间的元素
     * 设置listArea的偏移量为startOffset
     */
    const onScroll = () => {
        const scrollTop = viewport.current?.scrollTop; // 滚动距离
        const startIndex = getStartIndex(Number(scrollTop));
        setstartIndex(startIndex);

        const startOffset = getStartOffset(startIndex);
        setstartOffset(startOffset);
    };

    return (
        <div
            className="lanui-virtuallist"
            style={{ height: `${height}px`, width: `${width}px` }}
            ref={viewport}
            onScroll={onScroll}
        >
            <div
                className="list-phantom"
                ref={phantom}
                style={{ height: `${phantomHeight}px` }}
            ></div>
            <div
                className="list-area"
                ref={listArea}
                style={{ transform: `translate3d(0,${startOffset}px,0)` }}
            >
                {data.map(
                    (item, index) =>
                        isBetweenViewRanges(index) && (
                            <div
                                key={item.id}
                                className="list-item"
                                style={{
                                    height: childrenHight + 'px',
                                    lineHeight: childrenHight + 'px',
                                    fontSize: '0.8rem',
                                }}
                            >
                                {item.id + item.value}
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export const VirtualList_Dynamic = ({
    height = 200,
    width = 200,
    ...props
}: VirtualList_DynamicProps) => {
    const { data = [] } = props; //渲染数据
    const viewport = useRef(null); // 可视区域
    const listArea = useRef(null); // 渲染区域
    const phantom = useRef(null); // 占位区域，列表总高度

    // 预估高度
    const defaultItemSize = 100;
    // 记录列表项的位置信息
    const [positions, setPositions] = useState(
        data.map((item, index) => {
            return {
                index,
                height: defaultItemSize,
                top: index * defaultItemSize,
                bottom: (index + 1) * defaultItemSize,
            };
        })
    );
    window.positions = positions;

    // 列表总高度
    const [phantomHeight, setphantomHeight] = useState(
        positions.reduce((total, item) => total + item.height, 0)
    );

    const viewCount = 10; // 渲染数量
    const [startIndex, setstartIndex] = useState(0); // 开始index
    // 结束index
    const endIndex = useMemo(() => startIndex + viewCount, [startIndex]);
    const [startOffset, setstartOffset] = useState(0); // 偏移量

    useEffect(() => {
        if (positions?.length) {
            const totalHeight = positions.reduce(
                (total, item) => total + item.height,
                0
            );
            setphantomHeight(totalHeight);
        }
    }, [positions]);
    // 测量高度
    const measure = (index: any, height: number) => {
        // 如果没有传入height，主动进行测量
        let element: HTMLDivElement = listArea.current!;
        if (height === undefined) {
            height =
                element.querySelector(`[index="${index}"]`)?.clientHeight ||
                defaultItemSize;
        }

        positions.forEach((item) => {
            if (item.index === index) {
                let oldHeight = item.height;
                let dHeight = oldHeight - height;

                // 向下更新
                if (dHeight) {
                    item.height = height;
                    item.bottom = item.bottom - dHeight;

                    for (let k = index + 1; k < positions.length; k++) {
                        positions[k].top = positions[k - 1].bottom;
                        positions[k].bottom = positions[k].bottom - dHeight;
                    }
                }
            }
        });
        setPositions(positions);
    };

    // 获取startIndex 二分查找法
    const getStartIndex = (scrollTop: number) => {
        let item = positions.find((i) => i && i.bottom > scrollTop);
        return item!.index;
    };

    // 获取startOffset
    const getStartOffset = (startIndex: number) => {
        return startIndex >= 1 ? positions[startIndex - 1].bottom : 0;
    };

    /**
     * 获取滚动距离 scrollTop
     * 根据 scrollTop 和 itemSize 计算出 startIndex 和 endIndex
     * 根据 scrollTop 和 itemSize 计算出 startOffset
     * 显示startIndex 和 endIndex之间的元素
     * 设置listArea的偏移量为startOffset
     */
    const onScroll = () => {
        const element: HTMLDivElement = viewport.current!;
        const scrollTop = element.scrollTop; // 滚动距离
        const startIndex = getStartIndex(scrollTop);
        setstartIndex(startIndex);

        const startOffset = getStartOffset(startIndex);
        setstartOffset(startOffset);
    };

    return (
        <div
            className="lanui-virtuallist"
            style={{ height: `${height}px`, width: `${width}px` }}
            ref={viewport}
            onScroll={onScroll}
        >
            <div
                className="list-phantom"
                ref={phantom}
                style={{ height: `${phantomHeight}px` }}
            ></div>
            <div
                className="list-area"
                ref={listArea}
                style={{ transform: `translate3d(0,${startOffset}px,0)` }}
            >
                {data.map(
                    (item, index) =>
                        index >= startIndex &&
                        index <= endIndex &&
                        props.children({
                            index,
                            item,
                            measure,
                        })
                )}
            </div>
        </div>
    );
};

export const Observer_Item = (props: Observer_ItemProps) => {
    const { index, measure } = props;
    const element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        measureItem(index);

        return observe();
    }, []);

    // 监听高度变化
    const observe = () => {
        const resizeObserver = new ResizeObserver(() => {
            // 获取当前列表项的高度
            const el = element.current;
            if (el && el.offsetHeight) {
                // 触发更新
                measure(index, el.offsetHeight);
            }
        });
        resizeObserver.observe(element.current!);

        return () => resizeObserver.disconnect();
    };

    // 初次渲染完成
    const measureItem = (index: HTMLDivElement) => {
        const item = element.current;
        if (item?.clientHeight) {
            measure(index, item.clientHeight);
        }
    };

    return (
        <div index={index} className="list-item-observer" ref={element}>
            {props.children}
        </div>
    );
};
