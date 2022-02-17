import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-register/login/login.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { SelectComponent } from './components/account/select/select.component';
import { AccountMiniComponent } from './components/account/account-mini/account-mini.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountViewComponent } from './components/account/account-view/account-view.component';
import { AccountInfoComponent } from './components/account/account-detail/account-info/account-info.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppBootstrapComponent } from './app-bootstrap/app-bootstrap.component';
import { AccountTransactionsComponent } from './components/account/account-transactions/account-transactions.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './_services/transactions/in-memory-data.service';
import { TransactionHistoryComponent } from './components/account/account-transactions/history/transaction-history/transaction-history.component';
import { SelectTransactionComponent } from './components/transaction/select-transaction/select-transaction.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { WithdrawGenerateComponent } from './components/transaction/withdraw-generate/withdraw-generate.component';
import { DepositGenerateComponent } from './components/transaction/deposit-generate/deposit-generate.component';
import { DepositDetailComponent } from './components/transaction/deposit-detail/deposit-detail.component';
import { WithdrawDetailComponent } from './components/transaction/withdraw-detail/withdraw-detail.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SelectComponent,
    AccountMiniComponent,
    AccountDetailComponent,
    AccountViewComponent,
    AccountInfoComponent,
    AppBootstrapComponent,
    AccountTransactionsComponent,
    TransactionHistoryComponent,
    SelectTransactionComponent,
    AccountProfileComponent,
    WithdrawGenerateComponent,
    DepositGenerateComponent,
    DepositDetailComponent,
    WithdrawDetailComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppBootstrapModule
    // HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
    //   {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)