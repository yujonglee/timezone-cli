# Timezone-CLI

I build this for my personal use, because there's nothing suits my needs.

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

