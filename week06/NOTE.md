学习笔记
1、重学CSS 总论
①CSS语法的研究
CSS2.1的语法
• https://www.w3.org/TR/CSS21/grammar.html#q25.0
• https://www.w3.org/TR/css-syntax-3
CSS总体结构
• @charset
• @import
• rules
• @media
• @page
• rule
②CSS @规则的研究
At-rules
• @charset ： https://www.w3.org/TR/css-syntax-3/
• @import ：https://www.w3.org/TR/css-cascade-4/
• @media ：https://www.w3.org/TR/css3-conditional/
• @page ： https://www.w3.org/TR/css-page-3/
• @counter-style ：https://www.w3.org/TR/css-counter-styles-3
• @keyframes ：https://www.w3.org/TR/css-animations-1/
• @fontface ：https://www.w3.org/TR/css-fonts-3/
• @supports ：https://www.w3.org/TR/css3-conditional/
• @namespace ：https://www.w3.org/TR/css-namespaces-3/
③CSS规则的结构
CSS规则 
• 选择器 
• 声明 • Key • Value

• Selector
• https://www.w3.org/TR/selectors-3/
• https://www.w3.org/TR/selectors-4/
• Key
• Properties
• Variables: https://www.w3.org/TR/css-variables/
• Value
• https://www.w3.org/TR/css-values-4/
CSS总论——总结
• CSS语法
• at-rule
• selector
• variables
• value
• 实验

2、重学CSS 选择器
①选择器语法
• 简单选择器
• *
• div svg|a
• .cls
• #id
• [attr=value]
• :hover
• ::before

• 复合选择器
• <简单选择器><简单选择器><简单选择器>
• * 或者 div 必须写在最前面
• 复杂选择器
• <复合选择器><sp><复合选择器>
• <复合选择器>">"<复合选择器>
• <复合选择器>"~"<复合选择器>
• <复合选择器>"+"<复合选择器>
• <复合选择器>"||"<复合选择器>

3、选择器优先级
• 简单选择器计数
#id div.a#id {
//......
}
1 2
[0, 2, 1, 1]
S = 0 * N³+ 2 * N²+ 1 * N¹+ 1
取N = 1000000
S = 2000001000001

4、伪类
• 链接/行为
• :any-link
• :link :visited
• :hover
• :active
• :focus
• :target

• 树结构
• :empty
• :nth-child()
• :nth-last-child()
• :first-child :last-child :only-child

• 逻辑型
• :not伪类
• :where :has

5、伪元素
• ::before
• ::after
• ::first-line
• ::first-letter

思考
• 为什么first-letter可以设置float之类的，而first-line不行呢？
• first-letter在布局完成之后，确定了一段文字中的第一个文字，可以对其操作布局时性能开销小； 而first-line选中的是第一行文字，不同的宽度，不同浏览器选中的文字内容不一样，要对其重新布局排版消耗性能大,所以first-letter 可以设置 float 之类的，而 first-line 不行。