import { Crawler } from './module/crawler.js'

const cr = new Crawler();
await cr.launch();
//페이지 이동
await cr.goto('https://www.e-gen.or.kr/egen/main.do');

//페이지 찾아가기
await cr.move();

//시구군 선택

// const mainProcess = async () => {
//   const cr = new Crawler('seoul', 'kangnam_gu')

//   try {
//     await cr.launch()

//     // 페이지 이동
//     await cr.goto('https://www.pharm114.or.kr/main.asp')

//     // 팝업닫기
//     await cr.checkPopup()

//     // 도시 선택
//     await cr.evalCity()

//     // 시군구 선택
//     await cr.evalCounty()

//     // 경고창 닫기
//     await cr.alertClick()

//     // 총 페이지 수 
//     await cr.getPageLength()

//     // 데이터
//     await cr.getData()

//     await cr.writeFile()

//     console.log('done')
//     process.exit(1)

//   } catch(e) {
//     console.error(e)
//     process.exit(-1)
//   }

// }

// mainProcess()