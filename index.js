class Formatter {

  //add static methods here
  static capitalize(s){
    return `${s[0].toUpperCase()}${s.slice(1)}`;
  }

  static sanitize(s){
    return s.replace(/[^-' A-Za-z0-9]+/g,"");
  }
  static titleize(s){
    const excluded = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const split = s.split(" ");

    split[0] = this.capitalize(split[0]);
    
    return split.map(word=>{
      if(excluded.filter(ex=>ex === word).length <= 0){
        return this.capitalize(word);
      }else{
        return word;
      }
    }).join(" ");
  }
}