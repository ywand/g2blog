---
title: GitHub PagesでGatsbyを公開するまでのメモ
date: "2019-09-19 20:53:00"
description: Gatsbyで作ったサイトをGitHub Pagesに公開するまで手順を書き留めておきます.
tags: [Gatsby, GitHub, GitHub Pages]
---

いったん簡易的メモ書きとしておいて、気が向いたら追記予定です.   
[Node.js](https://nodejs.org/ja/)、npm、[Git](https://git-scm.com/)などのインストールと使い方、  
[GitHub](https://github.co.jp/)のアカウント作成については別記事にまとめます.  
([GitLab](https://gitlab.com/)の方でも静的サイト公開が可能らしいのでそっちでも試してみたいですね)


## 1. Gatsbyインストール
```bash
npm install -g gatsby
gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog
```

npmを使用してgatsbyをインストールします.  
その後、`gatsby new`でスターターキットをベースにしてプロジェクトを作成します.  
今回はgatsby-starter-blogをベースに使用しました.  
シンプルな作りでカスタマイズを自分でするタイプのスターターキットです.  
(最初からリッチな物で始めたい時は[こちらを参考に選択します](https://www.gatsbyjs.org/starters/?v=2))


## 2. ローカルでの動作確認
```bash
cd myblog
npm run develop
```

package.jsonの中に`npm run`で使えるコマンドが記載されてます.  
```json:package.json
  "scripts": {
    "develop": "gatsby develop",
    ...
  }
```

`gatsby develop` コマンドを使っても同じみたいですね.  
これでビルドとローカルサーバーの立ち上げが行われます.  
ブラウザから[http://localhost:8000/](http://localhost:8000/)にアクセスすると、  
スターターの初期状態のページが表示されるようになりました.  


## 3. サイト情報の修正
```js:gatsby-config.js
module.exports = {
  pathPrefix: '/レポジトリ名',
  siteMetadata: {
    title: `サイトタイトル`,
    author: `管理者名`,
    description: `サイト説明`,
    siteUrl: `https://ユーザー名.github.io/レポジトリ名/`,
    social: {
      twitter: `アカウント`,
    },
  },
}
```

`myblog/gatsby-config.js`のsiteMetadataを自分用に修正します.  
siteUrlなどを公開用のGithub Pagesに合わせる形にしました.  
`gatsby new`で作成するプロジェクト名とレポジトリ名を合わせておくと楽です.   


## 4. 記事の編集
`myblog/content/blog/`配下に記事毎のフォルダがあって、  
mdファイルや画像が格納されている状態です.  
これをベースに記事などを自分用に作成する形なります.  

[http://localhost:8000/](http://localhost:8000/)の画面をいちいちリロードしなくても、  
mdファイルの保存だけでライブプレビュー的に編集できるのが凄く便利です.

ちなみにフォルダ名やファイル名が直接記事のURL化されるので、  
記事が管理がしやすいようにお好みで名前付けとフォルダ分けをします.  


## 5. プロフィールの修正
`myblog/src/components/Bio.js`でプロフィールを編集します.  

もしプロフィール表示部分が不要な場合は、  
`myblog/src/pages/index.js`内にある`<Bio />`というJSXタグを削除すれば、  
ページからプロフィールコンポーネントが削除されます.


## 6. gh-pagesのインストール
```bash
npm install gh-pages --save-dev
```
`gh-pages`をインストールして、ビルド後の静的ファイルをデプロイできるようにします.  

```json:package.json
  "scripts": {
    ...
    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
  }
```

`package.json`に追加すると、`myblog/public`内にあるビルド後の静的ファイルが、  
gh-pagesブランチとしてデプロイされるようになります.  
`gatsby-config.js`にpathPrefixを追加しておかないと、  
デプロイ後のサイト内リンクのURLが上手く設定されないので注意が必要です.  


## 7. GitHub Pagesでの公開
```bash
git remote add origin https://github.com/ユーザー名/レポジトリ名.git
git commit -m "new blog with gatsby!"
git push -u origin master
npm run deploy
```

masterブランチに
GitHubのリポジトリ設定からGitHub Pagesの項目を  
`Source gh-pages branch`に設定すると公開完了になります.

