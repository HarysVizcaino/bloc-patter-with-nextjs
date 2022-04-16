import { BlankModel } from '../models/BlankModel'

export interface IBlankService {
    create: (data: BlankModel) => void;
    get: () => BlankModel;
}

export interface IUseCases {
  // BLOCs ------>
  // AuthService: IAuthService;
  BlankService: IBlankService;
}