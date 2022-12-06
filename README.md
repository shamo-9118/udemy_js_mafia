# udemy_js_mafia
## Udemy Code Mafiaのjs動画で勉強
- 適宜わからないところがあれば書いていく
- わかるところは二倍速で視聴、もしくはスキップ
- 何かメモを残したいときはreadmeに書いていく

## 目的：一度JSを体系的に学ぶ、そして理解を深める
特に理解したいところ
- classの概念
- thisの概念
-  promiseの概念
ここら辺を重点的に理解したいと思う
ただclassもthisも最近のフロントエンドの開発では使わなくなってきていると思うので、そこまでガッツリとした理解というおより、出てきたら読んで理解ができる、そして単純なロジックなら調べながら書けるくらいの感覚でいい気がする。
非同期処理に関してもfetchとかよりもSWRとかのライブラリを使うことが多いと思うからざっくり理解で！

## 目的2:Vueの理解
- 動画の半分からはVue3の内容もあるためせっかくだからVue3の勉強もしていきたい
- この動画見終わったらVueのチュートリアルやってみる

### コールスタック
- 関数の実行は呼ばれた順にスタックしている。グローバルが宣言されて、次にグローバル（モジュール）で実行されているものが実行され積み重なっている。ここで積み重なったものからアウトしていく（消滅）していくことからLast In First Out = LIFO（先入後出し）と呼ばれる。

### ホイスティング（関数の巻き上げ）
- 変数は定義前に実行することができない。しかし関数は定義前に呼び出すことによって呼び出すことができる。ただしアロー関数のように変数定義の関数は、変数を定義をしているのと同様なので、呼び出すことができるない。
**関数が定義前に呼び出しても実行できる理由の中で、「メモリにあるから」とあったけどあまりピンときていない**
### クロージャー
- レキシカルスコープの値を参照しようとすること
- クロージャは「関数」と「その関数が作られた環境」という 2 つのものが一体となった特殊なオブジェクト
上の定義で言うとまずクロージャはオブジェクトであり関数 + 関数が作られたときに周辺の変数やらと言える

## 関数は実行可能なオブジェクト
- 