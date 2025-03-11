import{_ as t,c as a,a as p,o}from"./app-LhysmSA2.js";const s={};function l(n,e){return o(),a("div",null,e[0]||(e[0]=[p(`<h4 id="攻防等级-地级市" tabindex="-1"><a class="header-anchor" href="#攻防等级-地级市"><span>攻防等级：地级市</span></a></h4><h4 id="_1-信息收集使用的quake" tabindex="-1"><a class="header-anchor" href="#_1-信息收集使用的quake"><span>1.信息收集使用的quake</span></a></h4><p>使用的语法（这是目前针对地级市常用的信息收集方式，并且是最高效的方式之一）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">city: &quot;城市名&quot; and is_domain: &quot;true&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在这一句中，city后面跟的是城市名，is_domain后面跟的是域名，当两个条件都满足时，quake会返回满足条件的域名。需要注意的是，city这一句，是针对的地级市。</p><blockquote><p>quake是一个基于网络空间测绘的子域名收集工具，可以快速收集到目标域名，并且可以快速判断目标域名是否存活。除此之外，还有hunter（国内）、fofa、shodan等工具，都可以快速收集到目标域名。</p></blockquote><p>在对信心收集时，需要甄别哪些是蜜罐（蜜罐存在一些特征，根据特征识别）。在使用quake进行收集时，一般是按照信息的发布顺序排序的，首先是注意最新的信息。</p><p><strong>小tip: 首先需要学会痕迹的隐匿，这非常的重要。</strong></p><p>插件越多，所释放的流量越多，更容易暴露。</p><p>Todo: 如何组建信息收集的服务器？</p><h4 id="_2-打点入口" tabindex="-1"><a class="header-anchor" href="#_2-打点入口"><span>2.打点入口</span></a></h4><p>对象是某个企业的企业微信管理系统(伏笔)，经典弱口令admin/123456进入后台。</p><p>在地级市的对抗中，弱口令是一种比较高效的方式。一些企业的安全意识薄弱，并且没有购买安全服务，在这种情况下就不会对密码进行修改，密码会保持默认，这就出现了弱口令的情况。 账号可能存在两种，一种是admin一类的管理员账号，一种是test之类的测试账号。</p><p>如果在CMS可以被识别出来的情况下， 就可以使用nday。 CMS识别，除了指纹识别之外，除了图标以外，前端特征路径检索也是一种比较有效的思路（使用 google hack ）。</p><h5 id="使用的是爆破。" tabindex="-1"><a class="header-anchor" href="#使用的是爆破。"><span>使用的是爆破。</span></a></h5><p>爆破存在三种情况：</p><ul><li>固定账号，fuzz密码</li><li>fuzz账号，固定密码</li><li>交叉爆破</li></ul><blockquote><p>在优先级上，第二种 &gt; 第一种 &gt; 第三种</p></blockquote><p>因为是在演练的情况下，也要多观察和分析演练评分规则，创造高效的刷分技战法。</p><p>拿下后台之后，想办法getshell，文章作者中的办法是使用文件上传（需要注意杀软）。</p><blockquote><p>提到的另外一种办法是sql注入，迂回进入内网。在进入内网之后，如果没有思路，退一步，使用钓鱼攻击，尝试获取最常登录系统的账号密码。</p></blockquote><p>在文件上传时，是有顺序的：</p><ol><li>上传合规的素材（验证该功能是否可用）</li><li>内容不变，修改的后缀来检查合法性（后缀包括jsp、php、jspx、html,txt等）</li><li>后缀没有问题之后，修改内容为echo类的输出语句(验证文件是否可执行)</li><li>最后将内容改为shell后门内容 <em><strong>记住非常重要的一点：上传的文件和上传的文件名。如果这里失误，那很有可能就被发现</strong></em></li></ol><blockquote><p>并不是所有的杀软都会在后门落地之后就查杀，有可能在执行的时候进行，所以需要准备免杀的马。</p></blockquote><p>因为在文章提到了，文件上传之后马上就被查杀，所以没有能成功上传木马。在此之后根据查看到的权限，利用软件gotohttp远控连接上啦(但是连上之后是黑屏)。</p><blockquote><p>使用gotohttp进行远控，国护屏蔽了大厂的远控软件，但是没有屏蔽小厂的。</p></blockquote><p>回到如何上传免杀马的情况下，防护仅有windows defender，将马中某些字段换乘对应的Unicode编码，替换了两三个之后，完成了绕过。</p><p>在上传木马之后，利用了3398端口，petitpotam提权到系统权限，创建管理组用户。</p><p>代理在frp、neo和suo5都无法使用的情况下，使用了新的代理grs。使用代理（代理机上没有过多的安全软件），避免过多的载荷，减小被发现的风险。</p><p><em><strong>业务和安全，本身就是一个矛盾体</strong></em></p>`,30)]))}const r=t(s,[["render",l],["__file","red-1.html.vue"]]),d=JSON.parse('{"path":"/docs/red/red-1.html","title":"后台弱口令突破进内网","lang":"en-US","frontmatter":{"title":"后台弱口令突破进内网","date":"2025/02/25"},"headers":[],"git":{},"filePathRelative":"docs/red/red-1.md"}');export{r as comp,d as data};
