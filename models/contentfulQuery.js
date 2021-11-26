export default class ContentfulQuery {
    key = null;
    value = null;
    type = null;
  
    constructor(key, value, type = null) {
      this.key = key
      this.value = value
      this.type = type
    }
  
    static create(key, value, type = null) {
      return new ContentfulQuery(key, value, type)
    }
  
    toJSON() {
      return { ...this }
    }
  }