import axios from 'axios';

const storageSync = {
  // sync方法的名字必须和所存数据的key完全相同
  // 方法接受的参数为一整个object，所有参数从object中解构取出
  // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
  slideShows(params){ 
    let { id, resolve, reject, syncParams } = params;

    axios.get('/slideShows.json')
    .then( (response)=> {
      if(response.data && response.data.slideShows){
        storage.save({
          key: 'slideShows',
          data: response.data.slideShows,    
          expires: 1000 * 1  
        });
        
        resolve && resolve(response.data.slideShows);
      }else{
        // 失败则调用reject
        reject && reject(new Error('data parse error'));
      }
    }).catch(err => {
      // console.warn(err);
      reject && reject(err);
    });
  }
}

export default storageSync;