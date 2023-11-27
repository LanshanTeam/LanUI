import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import {
    VirtualList,
    VirtualList_Dynamic,
    Observer_Item,
    Observer_ItemProps,
} from '../components/virtualList/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/VirtualList',
    component: VirtualList,
    // componentSubtitle: 'this just is a button to click',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VirtualList>;
let data1: Array<any> = [];
for (let id = 0; id < 1000; id++) {
    data1.push({
        id,
        value: '你好', // 长文本
    });
}
let data2: Array<any> = [
    {
        id: 0,
        value: '515： 分面试的单位 如果是面试私企程序员，用个gmail邮箱面试官一看就懂了，你会翻墙，技术应该还可以，同等条件多看一眼。 如果是面试国企央企，用个g',
    },
    {
        id: 1,
        value: '约等于九： 可能是最完整的充电宝品牌选购文，5000、10000、20000、30000毫安mah所有容量移动电源购买推荐。 我自己已经在知乎写了好几个月的充电宝选购回答，对市面上所有高销量的移动电源产品…',
    },
    {
        id: 2,
        value: 'EA程序员： 打开华为官网，右上角切换地区和语言： 全球： 澳大利亚： 英国： 意大利： 中国： 你可以挨个点开看看，这个界面要么是EMUI，要么没有，只有中国才有鸿蒙。 所以有没有一种可能，除了中国以外的所有地方，',
    },
    {
        id: 3,
        value: '杨铎： 大概十几年前吧，我的编程一直处在打开console复制粘贴的水平，稍微熟悉点的也只是html+css，后端语言ASP看过两页，PHP也摸过机会',
    },
    {
        id: 4,
        value: '使然： 大概一年前，我司有位鸡哥把测试服务器开了外网访问权限，数据库密码123456，仅仅半天，数据库访问不了了，只有一个新的库，里面有张表，表里有句',
    },
    { id: 5, value: '高山流水： 我是985研究生，我明确告诉你十进制里没有10' },
    {
        id: 6,
        value: 'Rambo： 刚学的时候不直观，难度曲线大。 比如一个hello world python就直接 print("hello world!")',
    },
    {
        id: 7,
        value: '作为苦逼码农，每天花费大量时间使用VSCode来编写和调试代码​好消息是，VSCode有很多超酷扩展可以让效率直线上升，极大争取摸鱼时间，一起看看吧插播，更多文字总结·指南·实用工具·科技前沿动态第一时间更新在公粽号【啥都会一点的研究生】1. CodeSnap用 CodeSnap 轻松捕捉代码！让用户快速截图并分享代码。对于向小伙伴展示代码或解释东西超实用',
    },
    {
        id: 8,
        value: '作者：码农出击C语言和C++有什么区别？struct和class有什么区别？extern "C"的作用？函数重载和覆盖有什么区别？谈一谈你对多态的理解，运行时多态的实现原理是什么？对虚函数机制的理解，单继承、多继承、虚继承条件下虚函数表的结构如果虚函数是有效的，那为什么不把所有函数设为虚函数？构造函数可以是虚函数吗？析构函数可以是虚函数吗？什么场景需要用到纯虚函数？纯虚函数的作用是什么？了解RAII吗？介绍一下？类的大小怎么计算？volatile关键字的作用如何实现一个线程池？了解各种强制类型转换的原理及使用？指针和引用有什么区别？什么情况下用指针，什么情况下用引用？new和malloc有什么区别？malloc的内存可以用delete释放吗？malloc出来20字节内存，为什么free不需要传入20呢，不会产生内存泄漏吗？new[]和delete[]一定要配对使用吗？C++11新特性你都了解多少？了解auto和decltype吗？谈一谈你对左值和右值的了解，了解左值引用和右值引用吗？了解移动语义和完美转发吗？了解列表初始化吗？平时会用到function、bind、lambda吗，都什么场景下会用到？对C++11的mutex和RAII lock有过了解吗？对C++11的智能指针了解多少，可以自己实现一个智能指针吗？',
    },
    {
        id: 9,
        value: '知乎用户9rtMUR： 这是我们辅导员的通知，我觉得读起来一目了然 这是我们班长的通知，看着就烦…',
    },
    {
        id: 10,
        value: 'Holyan： 就昨天！带我儿子去打疫苗 刷卡付钱，输密码，显示密码错误！以为输错了，再输一次，还是错，怀疑自己了，输一个另外的还是错！怀疑自己了！ 下楼',
    },
    {
        id: 11,
        value: '及时躺平的咸鱼： 我也一直觉得WPS很垃圾，直至在某网站下载了wps 2019珠海政府定制版，然后惊为天人，然后ms office从此就在我电脑消失了',
    },
    {
        id: 12,
        value: '进程和线程的区别？操作系统是怎么进行进程管理的？操作系统是如何做到进程阻塞的？进程之间的通信方式有哪些？什么是上下文切换，操作系统是怎么做的上下文切换？线程是如何实现的？线程之间私有和共享的资源有哪些？一般应用程序内存空间的堆和栈的区别是什么？进程虚拟空间是怎么布局的？虚拟内存是如何映射到物理内存的？了解分页内存管理吗？产生死锁的必要条件有哪些？如何避免死锁？什么是大端字节，什么是小端字节？如何转换字节序？信号和信号量的区别是什么？锁的性能开销，锁的实现原理？',
    },
    {
        id: 13,
        value: '南石： 大学一对学弟学妹平时出双入对，大三的时候女生怀孕了， 两个人偷偷地想去打掉，到了医院大夫告诉他们，双胞胎，你们再考虑考虑吧， 男的慌了，打电话给',
    },
    {
        id: 14,
        value: '小林coding： 学习操作系统目的不是为了让你写一个操作系统内核，也不是让你参与 linux 内核开发，而是理解操作系统为用户态进程提供了怎样的运行',
    },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template1: ComponentStory<typeof VirtualList> = (args) => (
    <div style={{ display: 'flex' }}>
        <VirtualList {...args} />
    </div>
);
const Template2: ComponentStory<typeof VirtualList_Dynamic> = (args) => (
    <div style={{ display: 'flex' }}>
        <VirtualList_Dynamic {...args}>
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
    </div>
);

export const VirtualListExample = Template1.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VirtualListExample.args = {
    width: 1000,
    data: data1,
};

export const VirtualList_DynamicExample = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VirtualList_DynamicExample.args = {
    width: 1000,
    data: data2,
};

export const WithVariants = () => (
    <div style={{ display: 'flex' }}>
        <VirtualList data={data1}></VirtualList>
        <VirtualList_Dynamic data={data2}>
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
    </div>
);
