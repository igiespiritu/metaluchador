<template>
    <div class="mt-5">
        <div class="flex-center flex-row">
            <div class="col strike-line"></div>
            <h1 class="col font-PixelDigivolveItalic meta-secondary text-center">COLLECTIONS</h1>
            <div class="col strike-line"></div>
        </div>
        <div class="d-flex flex-wrap">
            <div v-for="(drop, i) in paginate"  :key='`data-${i}`' class="drop-container my-4">
                <div class="flex-center m-auto">
                    <pixelated-wrestler-bg :pixel="4" :pixelColor="`fff`">
                        <img class="wrestler" :src="`${wrestlerImage(wrestlerID(drop['New MetaLucha#']))}`" alt="">
                    </pixelated-wrestler-bg>
                </div>
                <h4 class="font-PixelDigivolveItalic text-center mt-3 mb-0">LUCHADOR {{ wrestlerID(drop['New MetaLucha#']) }}</h4>
            </div>
        </div>

        <div class="flex-center mt-5">
            <pixelated-arrow class="mx-5" direction="left" @click="prevBtn" />
            <div v-for="(pageNumber, i) in totalPages"
                class="mx-3 page-number"
                v-if="Math.abs(pageNumber - currentPage) < 2 || pageNumber == totalPages || pageNumber == 1"
                :key='`page-${i}`'
            >
                <a v-bind:key="pageNumber" class="cursor-pointer" @click="setPage(pageNumber)" :class="{'meta-primary': currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 2), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 2)}">{{ pageNumber }}</a>
            </div>
            <pixelated-arrow class="mx-5" direction="right" @click="nextBtn" />
        </div>
    </div>
</template>

<script>
import dataset from '../../static/wrestlers.json'
import PixelatedWrestlerBg from '../common/PixelatedWrestlerBg.vue'
import PixelatedArrow from '../common/PixelatedArrow.vue'

export default {
    name: 'DropsList',
    components: { PixelatedWrestlerBg, PixelatedArrow },
    data() {
        return {
            drops: [],
            currentPage: 0,
            itemsPerPage: 10,
            resultCount: 0
        }
    },
    mounted() {
        this.drops = dataset
        this.setPage(1)
    },
    computed: {
        totalPages() {
          return Math.ceil(this.resultCount / this.itemsPerPage)
        },
        paginate() {
            if (!this.drops || this.drops.length != this.drops.length) {
                return
            }
            this.resultCount = this.drops.length
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages
            }
            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
            return this.drops.slice(index, index + this.itemsPerPage)
        }
    },
    methods: {
        wrestlerID(e) {
            return e.padStart(4, 0)
        },
        wrestlerImage(e) {
            return `https://meta-luchador-wrestlers.s3.ap-southeast-1.amazonaws.com/wrestlers/MetaLuchaS01%23${e}.gif`
        },
        setPage(pageNumber) {
          this.currentPage = pageNumber
        },
        nextBtn() {
            const page = this.currentPage + 1
            page <= this.totalPages ? this.setPage(page) : console.log('end of list')
        },
        prevBtn() {
            const page = this.currentPage - 1
            page >= 1 ? this.setPage(page) : console.log('end of list')
        }
    }
}
</script>

<style lang="scss" scoped>
.drop-container {
    width: 20%;
    & > div {
        max-width: 212px;
    }
}
.strike-line {
    position: relative;
    height: 3px;
    background-color: #FFF;
}
.wrestler {
    width: 212px;
}
</style>
