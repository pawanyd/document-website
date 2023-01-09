import{_ as p,c as o,a,b as s,d as l,e,o as t,r}from"./app.d9fbe7ee.js";const x=JSON.parse('{"title":"Type Aliases","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type exclusion","slug":"type-exclusion","link":"#type-exclusion","children":[]},{"level":2,"title":"Cross-file type aliases","slug":"cross-file-type-aliases","link":"#cross-file-type-aliases","children":[]}],"relativePath":"features/type-aliases.md"}'),c={name:"features/type-aliases.md"},i={id:"type-aliases",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#type-aliases","aria-hidden":"true"},"#",-1),C=e(`<p>Type aliases are common in statically typed languages and provide a way of abstracting a type and reducing repetition in your code.</p><p>The code example below demonstrates a simplified version of a trait from the <a href="https://filamentphp.com/" target="_blank" rel="noreferrer">Filament</a> project that uses the same type definition in multiple places inside of a trait. You can compare the code in PXP and PHP by switching tabs.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-RWbGJ" id="tab-TAaEmye" checked="checked"><label for="tab-TAaEmye">HasLabel.pxp</label><input type="radio" name="group-RWbGJ" id="tab-Pd9bgiJ"><label for="tab-Pd9bgiJ">HasLabel.php</label></div><div class="blocks"><div class="language-pxp active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">pxp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> Htmlable </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> Closure </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">trait</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HasLabel</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">label</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getLabel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">): Label ~ Closure</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this-&gt;evaluate($this-&gt;label</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-php line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">trait</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HasLabel</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Htmlable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Closure</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">label</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Htmlable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Closure</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getLabel</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Htmlable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">evaluate</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div></div><p>As you can see in the PHP code example above, the type of a label is defined in a few different places. If you wanted to add an additional valid type to the example, you would need to change the code in 3 different places.</p><p>With the conversion to PXP, you can create an alias to a type and would only need to change the underlying type in a single location.</p><p>When PXP processes and transpiles the file, it will replace all of the aliases with their underlying type so that PHP can still execute the same runtime type checks as before.</p>`,6),D={id:"type-exclusion",tabindex:"-1"},A=a("a",{class:"header-anchor",href:"#type-exclusion","aria-hidden":"true"},"#",-1),F=e("<p>You may have noticed an unusual type definition on line 14 of the <code>HasLabel</code> example above, <code>Label ~ Closure</code>. In PXP, this operation is known as &quot;type exclusion&quot;.</p><p>The idea here is that you can use a single type alias in multiple places and narrow down the underlying type when necessary. The <code>HasLabel</code> trait will never actually return a <code>Closure</code> from the <code>getLabel()</code> method, so having that type there is unnecessary and could be the cause of unexpected behaviour.</p><p>Specifiying the return type as <code>Label ~ Closure</code> will remove the <code>Closure</code> type during processing and transpile down to just <code>string | Htmlable | null</code>.</p>",3),b={id:"cross-file-type-aliases",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#cross-file-type-aliases","aria-hidden":"true"},"#",-1),u=e(`<p>In most cases a type alias will only be used locally, that is, in the file where the type alias is defined. This is the default behaviour in PXP meaning type aliases are not made available globally. There are definitely some valid use-cases for sharing a type alias across files, for example generic return types for methods or multiple classes that accept the same type of value across methods.</p><p>You can import a type alias from another class in a similar fashion to functions and constants, with a <code>use</code> statement at the top of the file.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7RivU" id="tab--CsGDeh" checked="checked"><label for="tab--CsGDeh">one.php</label><input type="radio" name="group-7RivU" id="tab-577UX7I"><label for="tab-577UX7I">two.php</label></div><div class="blocks"><div class="language-pxp active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">pxp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">One</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">type number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">|</span><span style="color:#C792EA;">float</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-pxp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">pxp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Two</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">One</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sub</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><p>Type aliases are prefixed with the namespace in which they are defined, just like other forms of definitions in PHP. By importing the type, PXP will bring it into scope and check for usage of that type during compilation.</p>`,4);function m(h,f,g,_,v,B){const n=r("Badge");return t(),o("div",null,[a("h1",i,[s("Type Aliases "),l(n,{type:"warning",text:"basic support"}),s(),y]),C,a("h2",D,[s("Type exclusion "),l(n,{type:"danger",text:"pending implementation"}),s(),A]),F,a("h2",b,[s("Cross-file type aliases "),l(n,{type:"danger",text:"pending implementation"}),s(),d]),u])}const w=p(c,[["render",m]]);export{x as __pageData,w as default};
