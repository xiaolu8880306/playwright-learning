import { Page, Locator } from '@playwright/test';

export class HomePage {
	constructor(private page: Page) {}

	async goto() {
	 await this.page.goto('/');
	}

	async openCategory(name: string) {
	 await this.page.getByRole('link', { name }).click();
	}

	async addFirstProductToCart() {
		await this.page.locator('.card-title').first().click();
		await this.page.getByRole('link', { name: 'Add to cart' }).click();
	}
}