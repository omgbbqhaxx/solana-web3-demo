"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[7766],{8049:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-eec8ee88",path:"/tour/token-transfer.html",title:"Token Transfer",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"tour/token-transfer.md",git:{updatedTime:1662889975e3,contributors:[{name:"Yasin Aktimur",email:"yasinaktimur@gmail.com",commits:1}]}}},3256:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="token-transfer" tabindex="-1"><a class="header-anchor" href="#token-transfer" aria-hidden="true">#</a> Token Transfer</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Keypair<span class="token punctuation">,</span> Transaction<span class="token punctuation">,</span> Connection<span class="token punctuation">,</span> PublicKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createTransferCheckedInstruction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> bs58 <span class="token keyword">from</span> <span class="token string">&quot;bs58&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// connection</span>\n<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.devnet.solana.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8</span>\n<span class="token keyword">const</span> feePayer <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">fromSecretKey</span><span class="token punctuation">(</span>\n  bs58<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY</span>\n<span class="token keyword">const</span> alice <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">fromSecretKey</span><span class="token punctuation">(</span>\n  bs58<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mintPubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;AjMpnWhqrbFPJTQps4wEPNnGuQPMKUcfqHUqAeEf1WM4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tokenAccount1Pubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;37sAdhEFiYxKnQAm7CPd5GLK1ZxWovqn3p87kKjfD44c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tokenAccount2Pubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;CFEPU5Jd6DNj8gpjPLJ1d9i4xSJDGYNV7n6qw53zE3n1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// mint token</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> tx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    <span class="token function">createTransferCheckedInstruction</span><span class="token punctuation">(</span>\n      tokenAccount1Pubkey<span class="token punctuation">,</span> <span class="token comment">// from</span>\n      mintPubkey<span class="token punctuation">,</span> <span class="token comment">// mint</span>\n      tokenAccount2Pubkey<span class="token punctuation">,</span> <span class="token comment">// to</span>\n      alice<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// from&#39;s owner</span>\n      <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// amount</span>\n      <span class="token number">0</span> <span class="token comment">// decimals</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx<span class="token punctuation">,</span> <span class="token punctuation">[</span>feePayer<span class="token punctuation">,</span> alice<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>',2),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);