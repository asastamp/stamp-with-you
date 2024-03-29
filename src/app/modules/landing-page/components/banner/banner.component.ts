import { Component, OnInit } from '@angular/core';
import { resume } from './banner.metadata';
@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

	resume;

	ngOnInit(): void {
		this.resume = resume;
	}

	copyToClipboard(event: Event) {
		const inputMock = document.createElement('input');
		inputMock.value = (<HTMLElement>event.target).innerText;

		document.body.appendChild(inputMock);

		inputMock.select();
		inputMock.setSelectionRange(0, 99999);

		document.execCommand("copy");

		(<HTMLElement>event.target).innerText = 'Copied to Clipboard';
		setTimeout(() => {
			(<HTMLElement>event.target).innerText = inputMock.value;
		}, 1000);
		document.body.removeChild(inputMock);
	}
}
