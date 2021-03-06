import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { NavbarModule } from './navbar/navbar.module';
import { MintModule } from './mint/mint.module';
import { DepositModule } from './deposit/deposit.module';
import { TransferModule } from './transfer/transfer.module';
import { ApproveModule } from './approve/approve.module';
import { WithdrawModule } from './withdraw/withdraw.module';
import { ClaimModule } from './claim/claim.module';
import { ChallengeModule } from './challenge/challenge.module';
import { NotFound404Component } from './not-found404.component';
import { SharedModule } from './util/shared.module';
import { FraudModule } from './fraud/fraud.module';
import { ClipboardModule} from 'ngx-clipboard';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    UtilModule,
    SharedModule,
    NavbarModule,
    MintModule,
    DepositModule,
    TransferModule,
    ApproveModule,
    WithdrawModule,
    ClaimModule,
    ChallengeModule,
    NgbTooltipModule,
    FraudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
