import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import{AppComponent} from './app.component';
import {UserdetailComponent} from './userdetail/userdetail.component';
import {TeacherbordComponent} from './teacherbord/teacherbord.component'
import{ChatComponent} from './chat/chat.component';

const routes: Routes = [ 
{path:'', pathMatch: 'full',redirectTo:'teacherbord'},
{path: 'main', component: AppComponent},
{path:'userdetail' , component : UserdetailComponent},
{path:'teacherbord' , component : TeacherbordComponent},
{path:'chat',component: ChatComponent}
];

@NgModule({

	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [AppComponent,UserdetailComponent] 