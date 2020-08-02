学习笔记
1. CSS计算
① 收集CSS规则
遇到style标签就把CSS规则保存起来
其中，通过CSS Parser来分析CSS规则
重点研究和理解CSS Parser如何分析CSS规则的格式
② 添加调用
一旦创建元素，就会立即计算CSS
理论上，当分析一个元素的时候，所有CSS规则都已经收集完毕
但在真实浏览器中，可能会遇到写在body中的style标签，这时需要重新进行CSS计算
③ 获取父元素序列
在计算CSS的时候，必须知道某个元素的所有父元素才能判断其是否与CSS规则相匹配，因为在CSS规则里有子孙选择器、直接子元素选择器等选择规则
按照顺序，首先获取的是“当前元素”，所以获得和计算其父元素匹配的顺序就是从内向外的
④ 选择器与元素的匹配
选择器和当前元素的父元素排列的顺序是一致的（从内向外排列，进行匹配）
复杂选择器可以拆成针对单个元素的选择器，用循环来匹配父元素队列
⑤ 计算选择器与元素匹配
根据选择器的类型和元素属性来计算其是否与当前元素相匹配
在真实浏览器中，需要处理复合选择器
⑥ 生成computed属性
一旦选择匹配，就会把选择器运用到元素上，形成computed属性
⑦ specificity的计算逻辑
优先级：inline CSS > id > class > tag name，specificity是一个四元祖，越左边权重越高（也就是只要高位能够比较出来，就不考虑低位）
CSS规则是根据specificity和后来优先规则覆盖
一个CSS规则的specificity根据包含的简单选择器相加而成
2. 排版
① 根据浏览器属性进行排版
flex-direction:row
Main：width，x，left，right
Cross：height，y，top，bottom
flex-direction:column
Main：height，y，top，bottom
Cross：width，x，left，right
② 收集元素进行
分行
根据主轴尺寸，把元素分进行（hang）
若设置了no-wrap，则强行分配进第一行
③ 计算主轴
计算主轴方向
找出所有Flex元素
把主轴方向的剩余尺寸按比例分配给这些元素
当剩余空间为负数的时候，所有Flex元素设置为0，剩余元素等比例压缩
④ 计算交叉轴
计算交叉轴方向
根据每一行中最大元素尺寸计算行高
根据行高flex-align和item-align，确定元素具体位置
3. 渲染
① 绘制单个元素
如果把单个元素绘制成一张图片，需要依赖一个图形环境，比如采用npm包images
单个元素会绘制到一个viewport上
与绘制相关的属性包含background-color，border，background-image等，不过对于gradient属性，需要webGL库来实现
② 绘制DOM树
采用递归的方式，调用单个元素绘制的方法进行绘制整个DOM树
对于简易的浏览器，一些不需要绘制的节点进行了忽略处理
在实际浏览器中，文字绘制是难点，需要依赖各种字体库，把字体变成图片来渲染
在实际浏览器中，还会对一些图层进行compositing