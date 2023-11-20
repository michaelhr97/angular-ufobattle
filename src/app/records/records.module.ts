// records.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RecordsHomeComponent } from './records-home/records-home.component';

@NgModule({
  declarations: [TableComponent, RecordsHomeComponent],
  imports: [CommonModule],
})
export class RecordsModule {}
