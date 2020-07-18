import jsonp from 'jsonp';
export function getAllData(){
  //promise简单来说就是一个对象，从它可以获取异步操作的消息，promise提供统一接口
  return new Promise((res,rej)=>{
    jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.data);
        }
    })
  })
}


export function getHotData(){
  return new Promise((res,rej)=>{
    jsonp('https://opendata.baidu.com/api.php?query=%E5%85%A8%E5%9B%BD&resource_id=39258&tn=wisetpl&format=json',{param:'cb'},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.data);
        }
    })
  })
}
export function getZbData(){
  return new Promise((res,rej)=>{
    jsonp('https://opendata.baidu.com/data/inner?tn=reserved_all_res_tn&dspName=iphone&from_sf=1&dsp=iphone&resource_id=28565&alr=1&query=%E8%82%BA%E7%82%8E',{param:'cb'},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.Result[0].DisplayData.result);
        }
    })
  })
}

//jsonp(url,opts,fn), opts(object)一般只关注param，param默认是callback,这是与后端约定的参数名称，fn回调方法，用es6 promise