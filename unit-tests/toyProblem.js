// module.exports =  function songDecoderMethodThree(string){
//  var arr = string.split('WUB');
    
//  for (i=0; i<arr.length; i++)
//  {
//   if(arr[i]==="")
//   {
//      arr.splice(i, 1);
//      i--;
//   }  
//  }
// return arr.join(' ');
// }

// module.exports =  function(str){
//     let decodedString = str.replace(/WUB/g, ' ');
//     let fullDecode = decodedString.replace(/\s+/g, ' ');
//     return fullDecode.trim()
// }

module.exports = function(str){
    return str.replace(/(WUB)+/g, ' ').trim()
}