import { computed, defineComponent, ref } from 'vue';

import { usePlacesStore } from '@/composables';

import SearchResult from '@/components/search-results/SearchResult.vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResult        
    },
    setup() {
        const debounceTimeout = ref();
        const debounceValue = ref('');
        const { searchPlacesByTerm } = usePlacesStore();

        return {
            debounceValue,
            searchTerm: computed({
                get() {
                    return debounceValue.value;
                },
                set(val: string){
                    if(debounceTimeout.value) clearTimeout(debounceTimeout.value);

                    debounceTimeout.value = setTimeout(() => {
                        searchPlacesByTerm(val);
                    }, 500);
                }
            })
        }
    }
})