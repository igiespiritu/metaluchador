export default class Trait {
    id = null;
    name = null;
    url = null;
  
    constructor(id, name, url) {
      this.id = id
      this.name = name
      this.url = url
    }
  
    static create(data) {
      return new Trait(
        data.sys.id,
        data.fields.name,
        data.fields.url
      )
    }
  
    toJSON() {
      return { ...this }
    }
  }