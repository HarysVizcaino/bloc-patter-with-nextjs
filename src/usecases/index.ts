import { IUseCases } from './layer-interface'
import BlankServices from './bloc/BlankBloc'


class UseCases implements IUseCases { 
    BlankService = BlankServices
}

export default new UseCases()