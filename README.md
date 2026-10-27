# 누띠 간식 계산기

> **상태: 운영 중** — [wjdtjddns98.github.io/Nutti-Calculator](https://wjdtjddns98.github.io/Nutti-Calculator/) · 1인 개발(정성운) · 2026-05
>
> 포트폴리오: [AX(AI 활용)](https://wjdtjddns98.github.io/) · [개발자](https://wjdtjddns98.github.io/dev/)

반려견의 견종·체중·체형(BCS)·생활 패턴으로 하루 권장 칼로리와 **간식 허용량**을 계산하고, 고른 성분에 맞는 누띠 상품을 추천하는 정적 웹앱. 수제간식 쇼핑몰 [nutti.co.kr](https://nutti.co.kr) 의 유입 자산.

## 왜 만들었나 → 무엇이 됐나

- **문제** — "우리 개한테 간식을 얼마나 줘도 되나"는 흔한 질문인데, 쇼핑몰에는 답이 없었다.
- **결과** — 5단계 입력으로 kcal 과 적정량을 바로 보여 주고, 결과에서 상품으로 이어진다. GitHub Pages 에 올려 서버 비용 없이 운영 중.

## 설계 결정

1. **빌드 없는 Vanilla JS** — 서버·프레임워크 없이 `index.html` 하나. GitHub Pages 에 그대로 올린다.
2. **BCS 로 이상 체중을 보정** — 입력 체중이 아니라 체형 점수로 보정한 체중으로 칼로리를 계산한다.
3. **상품 추천은 데이터 파일로** — `js/products-data.js` 에 상품·성분을 두고 성분 선택 단계와 연동한다. 상품이 바뀌면 그 파일만 고친다.
4. **모바일 우선** — 1단계 화면이 뷰포트 높이에 맞고, 가로 모드·좁은 폭에서 스크롤이 이중으로 생기지 않게 다듬었다.

## 구조

```
index.html                  계산기 (견종 → 기본정보 → 생활패턴 → 성분 선택 → 결과)
routinebite-products.html   상품 페이지
js/calculator.js            계산·추천 로직
js/products-data.js         상품·성분 데이터
css/                        테마·계산기·상품 스타일
```

## 기술 스택

HTML · CSS · Vanilla JS · GitHub Pages · GA4

## 실행

빌드 과정이 없다. `index.html` 을 브라우저로 열거나, 로컬 서버로 띄운다.

```bash
python -m http.server 8080
```
