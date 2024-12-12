import { MutationTree } from 'vuex';
import { ExampleState } from './state';

const mutation: MutationTree<ExampleState> = {
    someMutation( /* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    }
}

export default mutation;