//출력값 : 3일도 자바스크립트
// var studyday = ["1일", "2일", "3일"];
// var subject = ["자바", "자바", "자바스크립트"];
// var obj = {
//     day: 2,
//     subject: "자바스크립트",
// };
// console.log(studyday[obj.day] + "도", subject[obj.day]);
// ---------------------------------------------------------------------------
// [] 안에 순서대로 넣기 , 순서는 0부터 시작
// 출력값 : 오늘도 자바스크립트 해야지
// var studyday = ["어제", "오늘", "내일", "다다음날", "다다다음날"];
// var subject = [
//     "자바스크립트",
//     "자바스크립트",
//     "평가",
//     "자바스크립트",
//     "피그마",
// ];
// var obj = {
//     day: 1,
//     subject: "자바스크립트",
// };
// console.log(studyday[1] + "도", subject[1] + "해야지", typeof studyday);
// console.log(studyday[obj.day] + "도",subject[obj.day] + "해야지",typeof studyday);
// ---------------------------------------------------------------------------
// var obj = {
//     studyday: ["어제", "오늘", "내일", "다다음날", "다다다음날", "마지막날"],
//     subject: [
//         "자바스크립트",
//         "자바스크립트",
//         "평가",
//         "자바스크립트",
//         "피그마",
//         "주말",
//     ],
// };

// 마지막날 피그마 console.log(obj.studyday[obj.studyday.length - 1], obj.subject[obj.subject.length - 1]);
// 전체공부는 6일입니다. console.log("전체공부는 "+obj.studyday.length+"일입니다.")
// 평가는 내일 console.log(obj.subject[2]+"는 "+obj.studyday[2])
// ---------------------------------------------------------------------------
// for (var i = 0; i < 10; i++) {console.log("10번출력되게 해줘요");}
// 어제는 자바스크립트 오늘은 ~ 반복 for (var i = 0; i < obj.studyday.length; i++) {console.log(obj.studyday[i] + "는 " + obj.subject[i]);}
// ---------------------------------------------------------------------------

// var obj = {
//     Number: ["1", "2", "3", "4", "5"],
//     work: ["세미나", "쇼핑", "농장참여", "쇼핑", "자유시간"],
// };

// for (var i = 0; i < obj.Number.length; i++) {console.log(obj.Number[i] + "ㅣ" + obj.work[i]);}
// ---------------------------------------------------------------------------

// var play = {
//     content: ["세미나", "농장체험", "쇼핑"],
// };

// var num = 0;
// for (var i in play.content) {
//     num = parseInt(i);
//     console.log(i, typeof i, num + 1);
// }
// ---------------------------------------------------------------------------

// 1번문제 -> for (i = 2; i < 10; i++) {console.log(i);}

// 2번문제 ->
// var days = ["월", "화", "수", "목", "금"];
// for (x in days) {console.log(days[x]);}

// 3번문제 ->
// for (i = 2; i < 10; i++) {console.log(2 + "x" + i + "=" + 2 * i);}
