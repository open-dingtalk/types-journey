
interface APIenv{
  bundleFrameworkType:string;
  bundleUrl:string;
  isDingtalk:boolean;
  isWeb:boolean;
  isWebAndroid:boolean;
  isWebiOS:boolean;
  isWeex:boolean;
  isWeexAndroid:boolean;
  isWeexiOS:boolean;
  originalUrl:string;
  version:string;
}

interface APIquerystring{
  parse(qs:string,sep:string,eq:string):void;
  stringify(obj:object,sep:string,eq:string):void;
}

interface APIurl{
  parse(url:string,parseQueryString:string):void;
  format(url:string,query:object):void;
}

interface APItimer{
  clearInterva(id:string):void;
  clearTimeout(id:string):void;
  setInterval(handler:Function,time:number):string;
  setTimeout(handler:Function,time:number):string;
}

declare module 'weex-dingtalk-journey'{
  export var document:any;
  export var env:APIenv;
  export var querystring:APIquerystring;
  export var url:APIurl;
  export function compareVersion(oldVersion:string,newVersion:string,containEqual:boolean):void;
  export function requireModule(name:string):void;
}