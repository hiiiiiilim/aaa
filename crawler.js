import puppeteer from 'puppeteer-core'
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
import os from 'os'
import fs from 'fs'

//팝업 화면설정, 세팅값
const macUrl = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const whidowsUrl = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
const currentOs = os.type()
const launchConfig = {
  headless: false,
  defaultViewport: null,
  ignoreDefaultArgs: ['--disable-extensions'],
  args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-notifications', '--disable-extensions'],
  executablePath: currentOs == 'Darwin' ? macUrl : whidowsUrl
}

const Crawler = function() {

  this.browser = null
  this.page = null
  this.pageLength = 0
  this.data = []

  this.launch = async () => {//페이지 정보 받아오는 함수
    this.browser = await puppeteer.launch(launchConfig)

    const allPages = await this.browser.pages()

    this.page = allPages[0]

  }

  // 페이지 이동
  this.goto = async (url) => await this.page.goto(url)

  //페이지선택
  //프라미스가 이행될때까지 기다리는 함수 async awaite 사용함 비동기방식
  this.pagemove = async () => {
  //await this.page.waitForSelector("#layoutContents > div.egen-main > div.egen-main-column1 > div:nth-child(2) > div > h4 > a");
  await this.page.click("#layoutContents > div.egen-main > div.egen-main-column1 > div:nth-child(2) > div > h4 > a");
  //await this.page.waitForSelector("#layoutContents > div.common-tabgroup.response-tabgroup-column2.mg_b20 > span:nth-child(2) > a");
  await this.page.click("#layoutContents > div.common-tabgroup.response-tabgroup-column2.mg_b20 > span:nth-child(2) > a");
  }

  //시군구 선택하는 함수
  this.chioce = async () =>{
    await this.page.querySelector("#generalSidoCode > option:nth-child(2)");
  }

    
}  
  

export {
  Crawler
}
