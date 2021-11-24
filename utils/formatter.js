export const formatContentfulRichText = (content, assets = [], entries = []) => {
    return content.reduce((acc, _) => {
      let value = null
  
      switch (_.nodeType) {
        case 'text':
          value = _.value
          break
        case 'list-item':
          value = `<li>${formatContentfulRichText(_.content, assets, entries).reduce((acc, __) => `${acc}${__}`, '')}</li>`
          break
        case 'hyperlink':
          value = `<a href=${_.data.uri}>${formatContentfulRichText(_.content, assets, entries).reduce((acc, __) => `${acc}${__}`, '')}</a>`
          break
        case 'ordered-list':
          value = `<ol>${formatContentfulRichText(_.content, assets, entries).reduce((acc, __) => `${acc}${__}`, '')}</ol>`
          break
        case 'unordered-list':
          value = `<ul>${formatContentfulRichText(_.content, assets, entries).reduce((acc, __) => `${acc}${__}`, '')}</ul>`
          break
        case 'paragraph':
          value = formatContentfulRichText(_.content, assets, entries).length !== 0
            ? `<p>${formatContentfulRichText(_.content, assets, entries).reduce((acc, __) => `${acc}${__}`, '')}</p>`
            : formatContentfulRichText(_.content, assets, entries)
          break
        case 'embedded-entry-block':
          value = `<a href="${entries.find(__ => __.sys.id === _.data.target.sys.id)?.fields?.link}">
                   <img src="${(assets || []).find(__ => __.sys.id === entries.find(__ => __.sys.id === _.data.target.sys.id)?.fields?.image?.sys?.id)?.fields?.file?.url}"/>
                   </a>`
          break
        case 'embedded-asset-block':
          value = `<img src="${(assets || []).find(__ => __.sys.id === _.data.target.sys.id)?.fields?.file?.url}"/>`
          break
      }
      return [...acc, value]
    }, []).filter(_ => _ !== null && _.length > 0)
  }
  
  export const slugify = (content, replacement = '-') => content.toLowerCase().replace(/ /g, replacement)