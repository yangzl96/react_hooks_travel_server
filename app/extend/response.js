module.exports = {
  set token(token){
    console.log('token', this)
    this.set('token', token);
  }
};