import ContentfulQuery from '../models/contentfulQuery'
import Luchador from '../models/luchador'
import Trait from '../models/trait'
import { slugify } from '../utils/formatter'
import Contentful from '../utils/contentful'

export default {
  state: () => ({
    luchadors: [],
    traits: [],
    init: false,
    loading: false,
    searchLoading: false
  }),
  mutations: {
    SET_LUCHADORS(state, val) {
      state.luchadors = [...val].sort(luchadorsSorter)
    },
    ADD_LUCHADOR(state, val) {
      state.luchadors = [
        ...state.luchadors,
        // Make sure to filter duplicates
        ...val.filter(_ => state.luchadors.findIndex(__ => _.id === __.id) === -1)
      ].sort(luchadorsSorter)
    },
    ADD_TRAIT(state, val) {
      state.traits = [
        ...state.traits,
        // Make sure to filter duplicates
        ...val.filter(_ => state.traits.findIndex(__ => _.id === __.id) === -1)
      ]
    },
    SET_INIT(state, val) {
      state.init = val
    },
    SET_LOADING(state, val) {
      state.loading = val
    },
    SET_SEARCH_LOADING(state, val) {
      state.searchLoading = val
    }
  },
  actions: {
    async init({ commit, dispatch }) {
      await dispatch('fetchLuchadors')
      commit('SET_INIT', true)
    },
    /**
     * Luchadors fetcher
     *
     * @param {Object} context
     * @param {Object} params
     */
    async fetchLuchadors({ commit }, query) {
      commit('SET_LOADING', true)
      try {
        const res = await Contentful.fetchDocumentsByType('luchador', query)
        if (res.data.items) {
            console.log(res.data.items)
          let luchador = res.data.items.map(_ => luchadorsMapper(_, res.data.includes?.Entry))
          luchador = luchador.map(_ => ({
            ..._,
            traits: _.traits.map(__ => traitsMapper(res.data.includes.Entry.find(___ => ___.sys.id === __)))
          }))
          commit('ADD_LUCHADOR', luchador)
        }
      } catch (err) {
        console.log(err)
      }
      commit('SET_LOADING', false)
    },
    /**
     * Trait fetcher
     *
     * @param {Object} context
     * @param {Object} params
     */
     async fetchTrait({ commit }, query) {
        commit('SET_LOADING', true)
        try {
          const res = await Contentful.fetchDocumentsByType('traits', query)
          if (res.data.items) {
            let trait = res.data.items.map(_ => traitsMapper(_))
            commit('ADD_TRAIT', trait)
          }
        } catch (err) {
          console.log(err)
        }
        commit('SET_LOADING', false)
      },
    toggleShown({ state, commit }, e) {
      commit('SET_SHOWN', e)
    }
  }
}

const luchadorsSorter = (a, b) => a.index - b.index
const luchadorsMapper = (_, entries = []) => Luchador.create(_, entries)
const traitsMapper = _ => Trait.create(_)