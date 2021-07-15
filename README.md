# Ably OpenAPI documents

This repository contains Ably OAS3 documents for the following REST APIs:

* Platform API
* Control API

## Versions

Each specification contains a version number. If a change is made that is breaking (that is, not backwards comptible) Ably will create a new specification file. For example, Control API version one is in `control-v1.yaml`, but version two would be in `control-v2.yaml`. When viewing locally in this repository, the latest specification is displayed by default. To view older versions of the specification, modify the files in the `openapi` folder to point to the version of the specification you'd like to view.

## Installation

The following command installs the requirements (currently, only `http-server`):

```sh
npm install
```

## Viewing the specification locally

To View the specification locally, run: 

```
npm start
```

Point your browser at http://localhost:8080. You can then select the API reference of your choice, rendered by [Redoc](https://github.com/Redocly/redoc).

## Validating the OAS3 documents with Spectral

You can validate the OAS3 documents with Spectral. 

To install Spectral:

```
npm install -g @stoplight/spectral
```

Or using Yarn:

```
yarn global add @stoplight/spectral
```

You can then validate your specification as required. For example, on the command-line enter:

```
spectral lint control-v1.yaml
```

This will then indicate any issues with the specification.

## Quickstart

You can see the [quickstart guide](quickstart.md) in this repository, or refer to the [main documentation](https://ably.com/documentation).

## About Ably

[Ably](https://ably.com) is a pub/sub messaging platform with a suite of integrated services to deliver realtime experiences such as interactive learning, logistics GPS tracking, and live sports updates.

Find out more about at [ably.com](https://ably.com).

