import axios from 'axios'
import ContentfulQuery from '../models/contentfulQuery'

const CONTENTFUL_REPO = 'https://cdn.contentful.com/spaces/' + process.env.VUE_APP_CONTENTFUL_SPACE_ID + '/environments/master'

export default class Contentful {
  static _client = axios.create({
    baseURL: CONTENTFUL_REPO,
    params: {
      'access_token': process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
      limit: 1000
    }
  })

  static _formatQuery = (params) => params.reduce((acc, _) => ({ ...acc, [`${_.key}${_.type !== null ? _.type : ''}`]: _.value }), {})

  /**
     * Main Contentful fetch documents interface
     *
     * @param {Object} params
     * @returns
     */
  static async fetchDocuments(params = {}, recursive = false) {
    if (this._client !== null) {
      const response = await this._client.get('/entries', {
        params: {
          ...process.server ? this._client.defaults.params : null,
          ...params
        }
      })
      if (response.status === 429 && !recursive) {
        await (new Promise(resolve => setTimeout(resolve, 1000)))
        return await this.fetchDocuments(params, true)
      } else if (response.status >= 200 && response.status < 300) {
        return response
      }
    }

    return null
  }

  /**
   * Wrapper around fetchDocumentsWithQuery, to make the type filtering easier
   *
   * @param {String} type
   * @param {Array} query
   * @returns
   */
  static async fetchDocumentsByType(type, query = []) {
    return await this.fetchDocumentsWithQuery([ContentfulQuery.create('content_type', type), ...query])
  }

  /**
   *
   * @param {Array} query - Array of ContentfulQuery
   * @returns
   */
  static async fetchDocumentsWithQuery(query) {
    const _query = [...query]
    return await this.fetchDocuments(this._formatQuery(_query))
  }
}