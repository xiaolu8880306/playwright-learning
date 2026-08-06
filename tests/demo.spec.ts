import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('首页加载并加购商品', async ({ page }) => {
   const home = new HomePage(page);

   await home.goto();
   await expect(page).toHaveTitle(/STORE/);

   await home.openCategory('Laptops');
   await home.addFirstProductToCart();

   // 弹窗确认加购成功
   page.once('dialog', d => d.accept());
 });