"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3690],{13690:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var l=s(47313),i=s(35179),d=s(46417);let n=document.getElementsByClassName("studio-wall");class a extends l.Component{constructor(t){super(t),this.onLoad=()=>{var t=document.getElementById("root");this.setState({themeSettingStatus:!1}),!this.state.loading&&n.length&&(this.setState({loading:!0}),t?setTimeout((()=>this.wallLoad())):this.wallLoad())},this.wallLoad=()=>{const t=i.O2;window.wall_Id=this.props.wall.Wall.id,fetch(t).then((t=>t.json())).then((t=>{const{id:e,script:s,css:l}=t;if(0==n.length&&window.location.pathname.includes("wall/personalize"))return void setTimeout((()=>this.wallLoad()),1e3);let i=document.createElement("div");i.setAttribute("id",e),document.getElementsByClassName("studio-wall")[0].appendChild(i);let d=document.createElement("link");d.setAttribute("type","text/css"),d.setAttribute("rel","stylesheet"),d.setAttribute("href",l),document.head.appendChild(d);let a=document.createElement("script");a.setAttribute("src",s),document.body.appendChild(a),setTimeout((()=>this.setState({loading:!1})),1e3)}))},this.state={loading:!1}}componentDidMount(){this.onLoad()}render(){return(0,d.jsx)("div",{style:{display:"flex"},children:(0,d.jsx)("div",{className:"studio-wall"})})}}const o=a}}]);