const offsetX = 15; //进场立场X轴偏移
const offsetY = 12; //进场立场Y轴偏移

/**
 * @param value 带单位或不带单位的值
 * @return 数组：[数字,单位]
 */
function getUnit(value: string): [number, string] {
    const match = value.match(/^([-+]?\d*\.?\d+)([a-zA-Z%]*)$/);
    if (match) {
        const numericPart = match[1]; // 数字部分
        const unitPart = match[2]; // 单位部分
        return [parseFloat(numericPart), unitPart];
    } else {
        return [0, 'px']; // 匹配失败
    }
}

export function getAnimatedAttr(
    width: string | number | undefined,
    style: Object | undefined
) {
    const ModalContentWidth =
        width ?? (style && 'width' in style ? style.width : '520px');
    const ModalContentTop = style && 'top' in style ? style.top : '50%';
    const resultWidth = getUnit(String(ModalContentWidth));
    const resultTop = getUnit(String(ModalContentTop));
    const AfterModalContentWidth = `calc(${resultWidth[0] + resultWidth[1]} - ${
        offsetX + 'px'
    })`;
    const AfterModalContentTop = `calc(${offsetY + 'px'} + ${
        resultTop[0] + resultTop[1]
    })`;

    return {
        ModalContentWidth,
        ModalContentTop,
        AfterModalContentWidth,
        AfterModalContentTop,
    };
}
