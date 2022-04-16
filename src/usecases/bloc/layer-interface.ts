
import { BlankModel } from '../../models/BlankModel'

export interface IBlankService {
    create: (data: BlankModel) => void;
    get: () => BlankModel;
}