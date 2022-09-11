"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[9840],{3061:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-6dbfcf3b",path:"/advanced/metaplex/get-nft.html",title:"Get NFT",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Does A Wallet Has A Specific NFT",slug:"does-a-wallet-has-a-specific-nft",children:[]}],filePathRelative:"advanced/metaplex/get-nft.md",git:{updatedTime:1662889975e3,contributors:[{name:"Yasin Aktimur",email:"yasinaktimur@gmail.com",commits:1}]}}},3036:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="get-nft" tabindex="-1"><a class="header-anchor" href="#get-nft" aria-hidden="true">#</a> Get NFT</h1><h2 id="does-a-wallet-has-a-specific-nft" tabindex="-1"><a class="header-anchor" href="#does-a-wallet-has-a-specific-nft" aria-hidden="true">#</a> Does A Wallet Has A Specific NFT</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TOKEN_PROGRAM_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Connection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token string">&quot;https://solana-api.projectserum.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n    <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getProgramAccounts</span><span class="token punctuation">(</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      filters<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          dataSize<span class="token operator">:</span> <span class="token number">165</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>\n            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            bytes<span class="token operator">:</span> <span class="token string">&quot;your mint address here&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>\n            offset<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n            bytes<span class="token operator">:</span> <span class="token string">&quot;your owner address here&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>\n            offset<span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>\n            bytes<span class="token operator">:</span> <span class="token string">&quot;Ahg1opVcGX&quot;</span><span class="token punctuation">,</span> <span class="token comment">// bs58 for [1,0,0,0,0,0,0,0], it is a byte array for u64 little endian</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      dataSlice<span class="token operator">:</span> <span class="token punctuation">{</span>\n        offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        length<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>',3),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);