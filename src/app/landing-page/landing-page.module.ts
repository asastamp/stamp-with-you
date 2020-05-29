import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
	declarations: [LandingPageComponent, HeaderComponent, SidebarComponent],
	imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
