import { useMemo, useRef, useState } from 'react';

export interface VirtualListProps {
    height?: number;
    width?: number;
    childrenHight?: number;
    data?: Array<any>;
}

const VirtualList = ({
    height = 200,
    width = 200,
    childrenHight = 40,
    ...props
}: VirtualListProps) => {
    const { data = [] } = props;
    const viewport = useRef(null); // 可视区域
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
        const scrollTop = viewport.current.scrollTop; // 滚动距离
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

export default VirtualList;
