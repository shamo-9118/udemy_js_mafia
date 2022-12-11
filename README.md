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
## 即時関数
- 関数定義と同時に一度だけ実行される関数
無名関数との違いが微妙に分かりづらい、、、


## thisの定義
- 呼び出しもとのオブジェクトへの参照を保持するためのもの
- 関数を引数で渡したときは関数の参照先がコピーされて複製される。その複製した関数を実行するので渡した関数と同じもを実行するとは限らない。
- bind()はthisや引数の参照先を変更するけど、使用時点で実行はしない
- call(),apply()はthisや引数の参照先を変更する点ではbind()と一緒しかし、同時に関数の実行も行う

## コンストラクタ関数
- new演算子を使って生成される
- const a = new A();
- コンストラクタ関数はオブジェクトを生成する、コンストラクタ関数によって生成されたオブジェクトはインスタンスと呼ばれる。
- インスタンス化をおこなった際にはprototypeが__proto__へコピーされる
- prototypeを__proto__が参照するので結局実行されるのはprototypeで定義した関数である。
### new演算子
- コンストラクタ関数からインスタンス生成するときに使用される演算子である
- プロトタイプ継承 = 別のコンストラクター関数のprototypeを受け継いでコンストラクター関数を生成することが可能となっている
- 継承 = 別のコンストラクター関数自体を受け継ぐこと（これにはプロトタイプ継承も入る）
## クラス
- コンストラクター関数をクラスによって記述可能にしたもの
    - コンストラクター関数との違いは何？
- すでにある機能を簡単に書けるようにしたものを**シンタックスシュガー**と言います
