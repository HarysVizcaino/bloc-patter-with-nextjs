import { IBlankService } from '../layer-interface'

import { IBlankState } from './stateModel';

import { ProtoBloc } from '../ProtoBloc'
import { BlankModel } from '../../../models/BlankModel';

const defaultState: IBlankState = {
    data: {
        name: '',
        nickname: '',
        age: 0,
    },
  }

class BlankBlock extends ProtoBloc<IBlankState> implements IBlankService {
    constructor() {
        super(defaultState)
    }

    create(data: BlankModel) {
        console.log('CREATING', data)
        this.pushState({ data })
    }

    get(): BlankModel {
        return this.state.data;
    }
}

export default new BlankBlock()