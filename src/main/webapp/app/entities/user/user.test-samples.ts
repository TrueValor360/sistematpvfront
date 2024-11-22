import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 17502,
  login: 'gA4',
};

export const sampleWithPartialData: IUser = {
  id: 12132,
  login: 'd_BgP9@dCdc9\\Qv8VEUP\\[el\\L8\\Yy\\d5aR',
};

export const sampleWithFullData: IUser = {
  id: 334,
  login: 'BQ@3P',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
