import { DEFAULT_INDEX } from '../utils/constants'
import { formatContentfulRichText } from '../utils/formatter'

export default class Luchador {
  contentfulID = null;
  id = null;
  name = null;
  traits = null;
  url = null;

  constructor(contentfulID, id, name, url, traits) {
    this.contentfulID = contentfulID
    this.id = id
    this.name = name
    this.url = url
    this.traits = traits
  }

  static create(data, entries = []) {
    return new Luchador(
      data.sys.id,
      data.fields?.id,
      data.fields?.name,
      data.fields?.url,
      (data.fields?.traits || [], entries).map(_ => _.sys.id)
    )
  }

  toJSON() {
    return { ...this }
  }
}