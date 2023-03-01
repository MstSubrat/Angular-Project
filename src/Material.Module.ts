import { NgModule } from "@angular/core";
import { MatCardActions, MatCardModule } from "@angular/material/card";
import { MatFormFieldModule, MatHint } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table'
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule} from  "@angular/material/sidenav";
import { MatIconModule } from  "@angular/material/icon";
import { MatListModule } from  "@angular/material/list";

@NgModule({
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule,
        MatRadioModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ]
})
export class MaterialModule {

}