export default {
  changeCity (state, city) {
    /* 让state.city属性等于传入的city值 */
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
