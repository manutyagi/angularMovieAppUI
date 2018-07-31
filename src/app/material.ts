import { MatButtonModule ,MatCheckboxModule } from '@angular/material';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';


@NgModule({
imports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatCardModule,MatGridListModule,MatInputModule],
exports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatCardModule,MatGridListModule,MatInputModule]
})

export class MaterialModule{} 