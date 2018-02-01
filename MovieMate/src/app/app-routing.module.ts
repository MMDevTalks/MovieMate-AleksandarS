import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';

const routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [AnonymousGuard]
    },
    {
        path: 'details',
        outlet: 'sidebar',
        component: ProxyRouteComponent,
        children: [
            {
                path: '',
                loadChildren: './details/details.module#DetailsModule',
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
