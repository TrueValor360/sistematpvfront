import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '74ec4c02-e549-4221-a662-1b7e3fa24cf3',
};

export const sampleWithPartialData: IAuthority = {
  name: '9ecfcbde-68e4-4437-afb8-fe125ca018b0',
};

export const sampleWithFullData: IAuthority = {
  name: '08a2377d-de4b-4333-bf13-0276a3c2cbe0',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
