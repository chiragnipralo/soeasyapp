"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6874],{6874:(u,o,e)=>{e.r(o),e.d(o,{Browser:()=>_,BrowserWeb:()=>t});var r=e(5861),l=e(7423);class t extends l.Uw{constructor(){super(),this._lastWindow=null}open(s){var n=this;return(0,r.Z)(function*(){n._lastWindow=window.open(s.url,s.windowName||"_blank")})()}close(){var s=this;return(0,r.Z)(function*(){return new Promise((n,a)=>{null!=s._lastWindow?(s._lastWindow.close(),s._lastWindow=null,n()):a("No active window to close!")})})()}}const _=new t}}]);