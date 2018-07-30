import { MatButtonModule ,MatCheckboxModule } from '@angular/material';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule,MatCheckboxModule],
exports: [MatButtonModule,MatCheckboxModule],
})

export class MaterialModule{} 