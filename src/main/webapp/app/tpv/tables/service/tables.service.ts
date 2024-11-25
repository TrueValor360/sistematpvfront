import { Injectable } from '@angular/core';
import { Section } from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  sections: Section[] = [
    {
      name: 'Interior',
      tables: [
        {
          name: 'T1',
          state: 'Libre',
        },
        {
          name: 'T2',
          state: 'Libre',
        },
        {
          name: 'B2',
          state: 'Libre',
        },
      ],
    },
    {
      name: 'Terraza 1',
      tables: [
        {
          name: 'Te1',
          state: 'Libre',
        },
        {
          name: 'Te2',
          state: 'Libre',
        },
        {
          name: 'Be2',
          state: 'Libre',
        },
      ],
    },
  ];

  constructor() {}
}
