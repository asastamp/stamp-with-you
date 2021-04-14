import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
	declarations: [
		LandingPageComponent,
		HeaderComponent,
		BannerComponent
	],
	imports: [CommonModule, LandingPageRoutingModule],
	exports: [
		LandingPageComponent
	],
})
export class LandingPageModule { }
