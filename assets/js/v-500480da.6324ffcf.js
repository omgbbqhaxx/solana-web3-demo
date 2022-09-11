"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[2585],{7851:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-500480da",path:"/advanced/token/wrapped-sol/add-balance.html",title:"Add Balance",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"advanced/token/wrapped-sol/add-balance.md",git:{updatedTime:1662889975e3,contributors:[{name:"Yasin Aktimur",email:"yasinaktimur@gmail.com",commits:1}]}}},9753:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(6252).uE)('<h1 id="add-balance" tabindex="-1"><a class="header-anchor" href="#add-balance" aria-hidden="true">#</a> Add Balance</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Keypair<span class="token punctuation">,</span> Transaction<span class="token punctuation">,</span> SystemProgram<span class="token punctuation">,</span> TransactionInstruction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALICE</span><span class="token punctuation">,</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span> <span class="token constant">TEST_MINT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../../helper/const&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> SPLToken <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// add balance</span>\n\n<span class="token comment">// wrapped sol can&#39;t use `mint to`. here are two ways we can increase our wrapped sol balance</span>\n\n<span class="token comment">// 1. use tmp account</span>\n<span class="token comment">//   a. create a tmp account with init balance which is rent + amount</span>\n<span class="token comment">//   b. use `token transfer` to trasnfer wrapped sol to our token account</span>\n<span class="token comment">//   c. close the tmp account</span>\n\n<span class="token comment">// 2. SyncNative</span>\n<span class="token comment">//   a. transfer SOL to our token account</span>\n<span class="token comment">//   b. do `SyncNative` instruction</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> ata <span class="token operator">=</span> <span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getAssociatedTokenAddress</span><span class="token punctuation">(</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">NATIVE_MINT</span><span class="token punctuation">,</span>\n    <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ata<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 1. use tmp account</span>\n\n  <span class="token keyword">let</span> tmpAccount <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// wrapped sol&#39;s decimals is 9</span>\n  <span class="token keyword">let</span> amount <span class="token operator">=</span> <span class="token number">1e9</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> tx1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    SystemProgram<span class="token punctuation">.</span><span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fromPubkey<span class="token operator">:</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      newAccountPubkey<span class="token operator">:</span> tmpAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      space<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span>AccountLayout<span class="token punctuation">.</span>span<span class="token punctuation">,</span>\n      lamports<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getMinBalanceRentForExemptAccount</span><span class="token punctuation">(</span><span class="token constant">CONNECTION</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> amount<span class="token punctuation">,</span> <span class="token comment">// rent + amount</span>\n      programId<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createInitAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">NATIVE_MINT</span><span class="token punctuation">,</span>\n      tmpAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createTransferInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n      tmpAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      ata<span class="token punctuation">,</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      amount\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createCloseAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n      tmpAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx1<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">tx1 txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx1<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span> tmpAccount<span class="token punctuation">,</span> <span class="token constant">ALICE</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. SyncNative</span>\n  <span class="token keyword">let</span> tx2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fromPubkey<span class="token operator">:</span> <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      toPubkey<span class="token operator">:</span> ata<span class="token punctuation">,</span>\n      lamports<span class="token operator">:</span> amount<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// I worte raw instruction because @solana/spl-token havn&#39;t export this interface out</span>\n    <span class="token keyword">new</span> <span class="token class-name">TransactionInstruction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      keys<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          pubkey<span class="token operator">:</span> ata<span class="token punctuation">,</span>\n          isSigner<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          isWritable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      data<span class="token operator">:</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      programId<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx2<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx2<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span> <span class="token constant">ALICE</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div>',2),t={},o=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);