# Movie_comment_trailer

## Introduction

瀏覽各類電影資訊，並評論以及加入最愛

## Deployed Link

[https://movie-comment-system.herokuapp.com/](https://movie-comment-system.herokuapp.com/)

## Demo link

https://www.youtube.com/watch?v=tfPnITgkoPg

## How to use

1. deployed version : [https://movie-comment-system.herokuapp.com/](https://movie-comment-system.herokuapp.com/)
2. local version : 下載後在root資料夾npm install，再至backend資料夾npm install.分別npm start即可.localhost:3000就是主要頁面


### using packages/ References

-   [prop-types](https://www.npmjs.com/package/prop-types)

-   [react](https://reactjs.org/)

-   [react-dom](https://reactjs.org/)

-   [react-redux](https://redux.js.org/basics/usage-with-react)

-   [react-router-dom](https://reactjs.org/)

-   [react-scripts](https://reactjs.org/)

-   [react-scroll-up](https://github.com/milosjanda/react-scroll-up)

-   [redux](https://redux.js.org/)

-   [redux-promise](https://www.npmjs.com/package/redux-promise)


### Using

* Youtube API

### Reference

* https://github.com/RuhanRK/react-tmdb-movie
* https://github.com/SKempin/reactjs-tmdb-app?fbclid=IwAR0nZDZ9H3qQU8XfRqHVVjmKCBmFzaA0t98ZM6E7-pBPJi9lrRno2k31iEE
-   電影相關的資料是由 The Movie Database (TMDb) API. 而來
參考的連結只有前端，前端架構可參考連結的readme。後端主要是用graphql 和graphql-yoga，前端用Apollo、graphql和後端溝通。

### 心得
參考的react架構非常完整也非常龐大，讓人初步認識一個react架構應有的樣子。前端部分，除了要花不少時間去讀懂原作的寫法，為了新增電影資料庫的呈現方式，也去了解moviedb的API。後端採用graphql架構，雖然想著有HW3可以參考，但實際寫起來才發現繁瑣許多，還一度發生更改部分schema的插曲。
這次經驗讓我了解，一個完整的網頁服務，前端和後端工程師絕對是密不可分，也不可能專精一種，其他都不會，對兩類技術都有一定的認知才能夠合作。訂好schema非常重要，但對初學者來說，設想不周到的情況非常容易出現。

### 成員貢獻

* 陳冠豪:
	- 前端:
	      登入服務
	      熱門、最新電影分類
	      最愛功能
	- 後端:
		定義schema、寫resolver
	- deploy
* 賴繹文
	- 前端:
		最愛功能
	- 後端:
		定義schema、寫resolver
* 陳昱銓
	- 後端:
		定義schema、寫resolver
	- 影片readme製作
