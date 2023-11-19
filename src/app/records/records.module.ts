// records.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsHomeComponent } from './records-home/records-home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    RecordsHomeComponent,
    TableComponent,
    // ... otros componentes
  ],
  imports: [CommonModule],
})
export class RecordsModule {}
