"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[5743],{7601:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-9cc7d508",path:"/zh/advanced/token/close-account.html",title:"Close Account",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/advanced/token/close-account.md",git:{updatedTime:1662889975e3,contributors:[{name:"Yasin Aktimur",email:"yasinaktimur@gmail.com",commits:1}]}}},8252:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const t=(0,a(6252).uE)('<h1 id="close-account" tabindex="-1"><a class="header-anchor" href="#close-account" aria-hidden="true">#</a> Close Account</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PublicKey<span class="token punctuation">,</span> Connection<span class="token punctuation">,</span> Transaction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">ALICE</span><span class="token punctuation">,</span> <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../helper/const&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token constant">NATIVE_MINT</span><span class="token punctuation">,</span> Token <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// close token account</span>\n<span class="token comment">// 當某個token account你不想要再使用了，你可以使用此操作把裡面的rent回收。</span>\n<span class="token comment">// 但在close的時候會因為mint不同而有不同限制</span>\n<span class="token comment">// 1. 如果是 wrapped SOL, 你可以直接close, 沒有限制</span>\n<span class="token comment">// 2. 如果是 其他的mint(USDC, SRM ...), 你需要先把token都轉出，讓token balance變成0之後才能close</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> tx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    Token<span class="token punctuation">.</span><span class="token function">createCloseAccountInstruction</span><span class="token punctuation">(</span>\n      <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// 定值</span>\n      <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;Dmysc2pPCGQSzkgkMtcZAtGFzYa7DzohqBxh7aF1YxG3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 要回收的token account</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// rent要回收的地址</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// token account authority</span>\n      <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// multisig</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">ALICE</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>',2),p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);