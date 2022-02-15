# Timezone-CLI

I build this for my personal use, because there's nothing suits my needs.

![cli](https://user-images.githubusercontent.com/61503739/154101165-d9b1dd1a-8a7d-49b1-80a9-7409279b95fc.gif)

## Install

```shell
npm i -g timezone-cli@latest
```

## Usage

### Get Current time

```shell
timezone --mode=current
timezone -m=current
timezone
```

### Convert time or period

```shell
timezone --mode=convert
timezone -m=convert
```

## Timezone Support

Currently, `KST`, `PST`, and `UCT` are supported.

But any timezone in this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) can be added effortlessly with `constants.ts`.

