# <プロジェクト名>

## 概要

## フォルダ構成

```bash
<Project Root>
  │  .env                 環境設定ファイル
  │  docker-compose.yml   dockerの構成ファイル
  │  README.md            説明ドキュメント
  │
  ├─client                Reactアプリケーション
  │   ：
  ├─nginx                 Nginx（サーバ）
  │   ：
  └─webapi                WebAPI（Python）
      ：
```

## 動作確認環境

+ Windows10 Pro 21H2
+ Docker Desktop 4.14.0
  + Docker version 20.10.21
  + Docker Compose v2.12.2

## 開発環境構築

1. Windowsの場合は、BIOSで仮想化機能を有効にしておくこと
2. Docker Desktopをインストールする（要ライセンス）  
[Docker Desktopのダウンロードページ](https://www.docker.com/products/docker-desktop/)
3. コンテナをビルドして立ち上げる

    ```bash
    cd <プロジェクトルート>
    docker-compose build
    docker-compose up -d
    ```

4. .envの設定

    動作させる環境に合わせ環境変数の指定を.envファイル内で行う  
    サンプルは.env.sampleに示す

    ```bash
    # 変数の説明
    HOST_ADDRESS=<ホストのアドレス、localhostやIPアドレスを指定>
    HOST_PORT=<ポート番号>
    ```

5. devcontainerについて

    vscodeを用いて、devcontainer上での開発ができる。

    1. 拡張機能「Dev Containers」（ID: ms-vscode-remote.remote-containers）をインストールする。
    2. 左下の><のようなアイコンをクリックし、「open folder in container」を選択する。
         + clientコンテナで開発する場合はclientのフォルダを選ぶ。
         + webapiで開発する場合はwebapiフォルダを選ぶ。

    ※初回はコンテナのビルドに時間がかかる。

## テスト
