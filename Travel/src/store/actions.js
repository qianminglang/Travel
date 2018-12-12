export default {
  /* actinon中的方法是在this.$store.dispatch的时候指定的方法
  * 这个方法有两个参数，第一个表示上下文，第二个表示传递过来的参数
  * */
  changeCity (ctx, city) {
    /* 利用上下文去执行commit触发mutations的方法，注意
        第一个参数是和mutaion中的方法名要对应
    * */
    ctx.commit('changeCity', city)
  }
}
