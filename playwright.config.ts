import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testDir: './tests',
 reporter: [['html', { open: 'never' }]],
 retries:1,//失败自动重试1次
 use: {
   baseURL: 'http://demoblaze.com',
   headless: true,// 无头模式，CI 必开
   viewport: { width: 1280, height: 720 },
   //截图：on=每次都截，on-first-retry=失败重试时截，only-on-failure=仅失败时
   screenshot:'on-first-retry',//on是每条测试用例结束都截图
   // 视频：on=每次都录，off=关闭，on-first-retry=失败重试时录，retain-on-failure=仅失败时保留
   video:'on-first-retry',
   //Trace：on=每次都录，on-first-retry=失败重试时录，retain-on-failure=仅失败时保留
   trace:'on-first-retry',
 },
 projects: [
   {
     name: 'chromium',
     use: { ...devices['Desktop Chrome'] },
   },
   {
     name: 'firefox',
     use: { ...devices['Desktop Firefox'] },
   },
   {
     name: 'webkit',
     use: { ...devices['Desktop Safari'] },
   },
 ],
});