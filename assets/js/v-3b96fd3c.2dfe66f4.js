"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[4167],{6720:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3b96fd3c",path:"/zh/advanced/token/set-authority.html",title:"Set Authority",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/advanced/token/set-authority.md",git:{updatedTime:1662889975e3,contributors:[{name:"Yasin Aktimur",email:"yasinaktimur@gmail.com",commits:1}]}}},4339:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const t=(0,a(6252).uE)('<h1 id="set-authority" tabindex="-1"><a class="header-anchor" href="#set-authority" aria-hidden="true">#</a> Set Authority</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Transaction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../helper/const&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> Token <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 你可以設定/更新你的帳戶權限</span>\n<span class="token comment">// 這裡有四種權限可以指定更新 =&gt; &#39;MintTokens&#39; | &#39;FreezeAccount&#39; | &#39;AccountOwner&#39; | &#39;CloseAccount&#39;</span>\n<span class="token comment">// MintTokens 和 FreezeAccount 是給mint account使用的</span>\n<span class="token comment">// AccountOwner 和 CloseAccount 是給token account使用的</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> tx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    Token<span class="token punctuation">.</span><span class="token function">createSetAuthorityInstruction</span><span class="token punctuation">(</span>\n      <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// token program id</span>\n      <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// 目標帳戶 (這邊用mint account來當例子)</span>\n      <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 新的數值, 如果你想要拔掉該權限，可以直接傳null</span>\n      <span class="token string">&quot;MintTokens&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 剛剛所說的有四個型別的權限</span>\n      <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// 原本這個權限的帳戶</span>\n      <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>',2),p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);